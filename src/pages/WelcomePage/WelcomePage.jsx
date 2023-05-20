import { NavLink } from "react-router-dom";
import { motion as m } from "framer-motion";

import "./WelcomePage.css";
import Logo from "../../assets/images/logo_img.png";

import AuthButton from "../../components/form/Auth/AuthButton/AuthButton";

const WelcomePage = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="flex justify-center items-center h-screen">
                <div className="w-11/12 sm:w-80 font-dmsansRegular">
                    <div className="flex flex-col items-center">
                        <img className="w-20" src={Logo} alt="logo_img" />
                        <p className="welcomePageTitle">samesoulz</p>
                    </div>
                    <p className="welcomePageHeadline text-4xl my-7">
                        Make some soulmates by your interests
                    </p>
                    <NavLink to="/register">
                        <AuthButton value={"Register"} />
                    </NavLink>

                    <NavLink to="/login">
                        <AuthButton value={"Login"} />
                    </NavLink>
                </div>
            </div>
        </m.div>
    );
};

export default WelcomePage;
