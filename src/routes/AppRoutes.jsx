import {Route, Routes} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage.jsx";

const AppRoutes = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return (
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default AppRoutes;
