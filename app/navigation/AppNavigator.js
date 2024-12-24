import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListEditScreen from "../screens/ListEditScreen";
import { createStaticNavigation } from "@react-navigation/native";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListButton from "./NewListButton";
import routes from "./routes";

const Tab = createBottomTabNavigator({
    screenOptions: {
        headerShown: false
    },
    screens: {
        Feed: {
            screen: FeedNavigator,
            options: {
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
            }
        },
        ListingEdit: {
            screen: ListEditScreen,
            options: ({ navigation }) => ({
                tabBarButton: () => (<NewListButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />),
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                )
            })
        },
        Account: {
            screen: AccountNavigator,
            options: {
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                )
            }
        }
    }
});

const AppNavigator = createStaticNavigation(Tab);

export default AppNavigator