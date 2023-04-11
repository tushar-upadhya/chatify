import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMessages = () => {
    const [value, setValue] = useState("");
    // console.log("value:", value);

    const { currentUser } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (value.trim() === "") {
            alert("enter something");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid: uid,
            });
        } catch (error) {
            console.log("error:", error);
        }

        // console.log(value);
        setValue("");
    };

    return (
        <div className=" fixed bottom-0 w-full  shadow-lg">
            <form onSubmit={handleSubmit} className="containerWrap flex">
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="input w-full focus:outline-none bg-gray-100 rounded-r-none text-black"
                    type="text"
                    placeholder="write something"
                />
                <button
                    type="submit"
                    className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm hover:bg-[#47E65F] transition duration-200 "
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default SendMessages;
