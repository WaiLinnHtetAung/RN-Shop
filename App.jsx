import { Button, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStaticNavigation, useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";



 
export default function App() {
  return (
    <AppNavigator theme={NavigationTheme} />
  );
}
