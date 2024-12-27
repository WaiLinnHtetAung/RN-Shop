import * as SecureStore from 'expo-secure-store';

const key = 'authUser';

const storeAuthUser = async authUser => {
    console.log(authUser);
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(authUser));
        console.log(SecureStore.getItemAsync(key));
    } catch (error) {
        console.log('Error storing the auth token', error);
    }
}

const getAuthUser = async () => {
    try{
        return JSON.parse(await SecureStore.getItemAsync(key));
    } catch (error) {
        console.log('Error getting the auth token', error);
    }
}

const removeAuthUser = async () => {
    try{
        return await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Error removing the auth token', error);
    }
}

export default { storeAuthUser, getAuthUser, removeAuthUser }