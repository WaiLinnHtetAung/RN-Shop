import client from './client.js';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {

    const data = new FormData();

    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('category_id', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, index) => {
        if(index === 0) {
            const originalName = image.split('/').pop();

            data.append('image', {
                name: originalName,
                type: 'image/jpeg',
                uri: image
            })
        } 
    })

    if(listing.location) 
        data.append('location', JSON.stringify(listing.location));

    return client.post(endpoint, data, {
        onUploadProgress: progress => {
            const percentage = progress.loaded / progress.total;
            onUploadProgress(percentage)
        },
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}

export default {getListings, addListing}