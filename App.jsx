import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import authUserStorage from "./app/context/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useCallback, useEffect, useState } from "react";
import AuthContext from "./app/context/useAuthContext";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const getAuthUser = async () => {
    try {
      const user = await authUserStorage.getAuthUser();
      if (!user) return;
      setUser(user);
    } catch (error) {
      console.log(error);
    } finally {
      setAppIsReady(true);
    }
  };

  useEffect(() => {
    getAuthUser();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        {user ? (
          <AppNavigator theme={NavigationTheme} />
        ) : (
          <AuthNavigator theme={NavigationTheme} />
        )}
      </AuthContext.Provider>
    </View>
  );
}
