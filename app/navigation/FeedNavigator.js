import {createNativeStackNavigator } from '@react-navigation/native-stack'

import ListingsScreen from '../screens/ListingScreen'
import ListingDetailsScreen from '../screens/ListingDetailScreen'

const FeedNavigator = createNativeStackNavigator({
   screenOptions: {
       presentation: 'modal',
       headerShown: false
   },
    screens: {
        Listing: ListingsScreen,
        ListingDetails: ListingDetailsScreen
    }
})

export default FeedNavigator