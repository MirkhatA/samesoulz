import { Route, Routes } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import FriendsPage from "../pages/FriendsPage/FriendsPage.jsx";
import MessagePage from "../pages/MessagePage/MessagePage.jsx";
import FeedbackPage from "../pages/FeedbackPage/FeedbackPage.jsx";

const AppRoutes = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return (
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/messages" element={<MessagePage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRoutes;
