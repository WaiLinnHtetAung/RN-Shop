import {createNativeStackNavigator } from '@react-navigation/native-stack'
import AccountScreen from '../screens/AccountScreen'
import MessagesScreen from '../screens/MessagesScreen'



const AccountNavigator = createNativeStackNavigator({
    screens: {
        Account: AccountScreen,
        Messages: MessagesScreen
    }
})

export default AccountNavigator