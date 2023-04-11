import { createContext, useContext, useEffect, useState } from "react";

import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithRedirect,
    signOut,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const [loading, setLoading] = useState(true);

    //* signin google

    const singInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    // * signout

    const logout = () => {
        signOut(auth);
    };

    //* currentUser

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unSubscribe;
    }, []);

    const value = {
        currentUser,
        setCurrentUser,
        singInWithGoogle,
        logout,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
