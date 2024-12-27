import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';

export const usePushNotification = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    })

    const [expoPushToken, setExpoPushToken] = useState(null);
    const [notification, setNotification] = useState(false);

    const notificationListener = useRef();
    const responseListener = useRef();

    async function registerPushNotificationAsync() {
        let token;

        if(Device.isDevice) {
            const { existingStatus } = await Notifications.getPermissionsAsync();

            let finalStatus = existingStatus;

            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }

            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }

            try {
                const projectId = Constants?.expoConfig?.extra?.eas?.projectId 
                  
                token = await Notifications.getExpoPushTokenAsync({ projectId });
                console.log(token);
              } catch (e) {
                console.log(e);
              }

              if(Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
              }

              return token;

        }
        else {
            console.log('use physical device for push notifications');
        }
    }

    useEffect(() => {
        registerPushNotificationAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        }); 

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        }
    }, [])

    return {
        expoPushToken,
        notification,
        registerPushNotificationAsync
    }
}