import React from 'react'
import { Formik } from 'formik'

const Form = ({initialValues, onSubmit, validationSchema, children}) => {
  return (
    <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema} 
        onSubmit={onSubmit}
    >
        {() => <>{children}</>}
    </Formik>
  )
}

export default Form
