import { useContext } from "react";

import AuthContext from "../context/useAuthContext"
import authUserStorage from '../context/storage';


export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const login = (user) => {
        setUser(user);
        authUserStorage.storeAuthUser(user);
    }

    const logout = () => {
        setUser(null);
        authUserStorage.removeAuthUser();
    }

    return {user, login, logout};
}