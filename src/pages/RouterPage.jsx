import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import App from "../App";

export const RouterComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}