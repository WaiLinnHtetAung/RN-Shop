import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
    const [location, setLocation] = useState(null);

    const getLocation = async() => {
        try{
            const {granted} = await Location.requestForegroundPermissionsAsync();
            if(!granted) return;

            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
            setLocation({latitude, longitude});
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLocation();
    }, [])

    return location;
}