import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage';

const FormField = ({name, width, ...otherProps }) => {
    const {setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext();
  return (
    <>
        <AppTextInput 
            onBlur={() => setFieldTouched(name)}
            onChangeText={text => setFieldValue(name, text)}
            value={values[name]}
            width={width} 
            {...otherProps} 
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormField

const styles = StyleSheet.create({})