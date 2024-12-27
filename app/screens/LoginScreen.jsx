import { Image, StyleSheet } from 'react-native'
import React, {  useState } from 'react'
import * as Yup from 'yup'

import authApi from '../api/auth'

import Screen from '../components/Screen'
import {Form, FormField, SubmitButton, ErrorMessage} from '../components/form/Index'
import useAuth from '../auth/useAuth'

const validationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
    const [loginFail, setLoginFail] = useState(false);
    const {login} = useAuth()
    const handleSubmit = async({email, password}) => {
        const result = await authApi.login(email, password);
        
        if(!result.ok) {
            setLoginFail(true);
        }

        setLoginFail(false); 
        login(result.data);
    }

  return (
    <Screen style={styles.container}>
        <Image source={require("../../assets/logo-red.png")} style={styles.logo} />

        <Form
            initialValues={{email: "", password: ""}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <ErrorMessage error="Invalid email and/or password" visible={loginFail} />
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