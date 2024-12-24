import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createStaticNavigation} from '@react-navigation/native'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const RootStack = createNativeStackNavigator({
    screens: {
        Welcome: {
            screen: WelcomeScreen,
            options: { headerShown: false }
        },
        Login: LoginScreen,
        Register: RegisterScreen
    }
})

const AuthNavigator = createStaticNavigation(RootStack);

export default AuthNavigator
