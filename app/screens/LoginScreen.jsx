import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import SubmitButton from '../components/form/SubmitButton'
import FormField from '../components/form/FormField'
import Form from '../components/form/Form'

const validationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
        <Image source={require("../../assets/logo-red.png")} style={styles.logo} />

        <Form
            initialValues={{email: "", password: ""}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <FormField 
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                placeholder="Email"
                textContentType="emailAddress"
            />
            <FormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <SubmitButton title="Login" />
        </Form>
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})