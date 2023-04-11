import { Route, Routes } from "react-router-dom";
import Navbar from "./componets/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";

import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <>
            <AuthProvider>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/chatroom"
                        element={
                            <PrivateRoutes>
                                <ChatRoom />
                            </PrivateRoutes>
                        }
                    />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
