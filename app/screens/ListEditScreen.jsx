import { StyleSheet} from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { Form, FormField, FormPicker as Picker, SubmitButton } from '../components/form/Index'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/form/FormImagePicker'
import useLocation from '../../hooks/useLocation'

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).max(255).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().nullable().min(1).max(255).label("Description"),
    category: Yup.object().required().label("Category"),
    images: Yup.array().min(1, "Please select at least one image"),
})

const ListEditScreen = () => {

  const location = useLocation();

  return (
    <Screen style={styles.container}>
        <Form 
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: null,
                images: []
            }}
            onSubmit={values => console.log(location)}
            validationSchema={validationSchema}
        >
            <FormImagePicker name="images" />
            <FormField name="title" placeholder="Title" />
            <FormField 
                name="price" 
                placeholder="Price" 
                keyboardType="numeric"
                maxLength={8}
                width={140}
            />
            <Picker
                items={categories} 
                name="category" 
                placeholder="Category" 
                numberOfColumns="3"
                PickerItemComponent={CategoryPickerItem}
            />
            <FormField 
                name="description" 
                placeholder="Description" 
                maxLength={255}
                multipleLine
                numberOfLines={3}
            />
            <SubmitButton title="Save" />
        </Form>
    </Screen>
  )
}

export default ListEditScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})