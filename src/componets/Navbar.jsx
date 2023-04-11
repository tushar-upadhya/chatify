import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
    const { currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log("error:", error);
        }
    };
    return (
        <div className="navbar fixed z-10 bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <a className="btn btn-ghost normal-case font-semibold text-xl hover:text-[#F56C6C] transition duration-200">
                    Chatify
                </a>

                {currentUser ? (
                    <button
                        onClick={handleLogout}
                        className="  text-white  px-5 text-xl hover:text-[#F56C6C] transition duration-200"
                    >
                        Logout
                    </button>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Navbar;
