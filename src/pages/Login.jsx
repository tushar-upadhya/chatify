import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const { currentUser, singInWithGoogle } = UserAuth();
    // console.log("currentUser:", currentUser);

    const handleLogin = async () => {
        try {
            await singInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            navigate("/chatroom");
        }
    }, [currentUser]);

    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
                    <p className="py-6">
                        Join the conversation, meet new people, and make
                        connections in one shared room.
                    </p>
                    <button
                        onClick={handleLogin}
                        className="btn hover:text-[#23D175] transition duration-200"
                    >
                        Login With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
