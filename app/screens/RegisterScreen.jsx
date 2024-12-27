import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { ErrorMessage, Form, FormField, SubmitButton } from "../components/form/Index";
import Screen from "../components/Screen";

import authApi from "../api/auth";
import { useNavigation } from "@react-navigation/native";
import useApi from "../../hooks/useApi";
import ActiveIndicator from "../components/ActiveIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const navigation = useNavigation();
  const [registerFail, setRegisterFail] = useState(false);

  const registerApi = useApi(authApi.register);
  const handleSubmit = async ({ name, email, password }) => {

    const result = await registerApi.request(name, email, password);

    if(result.data.errors) {
        setRegisterFail(true);
        return;
    }

    setRegisterFail(false);
    navigation.navigate("Login");
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email and/or password" visible={registerFail} />
        <ActiveIndicator visible={registerApi.loading} />
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
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
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
