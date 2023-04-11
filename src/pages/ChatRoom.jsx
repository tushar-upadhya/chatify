import React from "react";
import ChatBox from "../componets/ChatBox";
import SendMessages from "../componets/SendMessages";

const ChatRoom = () => {
    return (
        <div className="bg-black">
            <ChatBox />
            <SendMessages />
        </div>
    );
};

export default ChatRoom;
