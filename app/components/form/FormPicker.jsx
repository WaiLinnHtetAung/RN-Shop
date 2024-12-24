import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

const FormPicker = ({
    items,
    name,
    placeholder,
    PickerItemComponent,
    numberOfColumns,
    width
}) => {
    const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        name={name}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        onSelectedItem={(item) => setFieldValue(name, item)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormPicker

const styles = StyleSheet.create({})