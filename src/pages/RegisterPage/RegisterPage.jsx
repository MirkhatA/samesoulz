import { NavLink } from "react-router-dom";

import Logo from "../../assets/images/logo_img.png";
import AuthInput from "../../components/form/Auth/AuthInput/AuthInput";
import AuthButton from "../../components/form/Auth/AuthButton/AuthButton";

const RegisterPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-11/12 sm:w-80 font-dmsansRegular">
                <div className="flex flex-col items-center">
                    <img className="w-20" src={Logo} alt="logo_img" />
                    <p className="welcomePageTitle text-xl">Login</p>

                    <form className="w-full mt-5">
                        <AuthInput placeholder="First name..." />
                        <AuthInput placeholder="Last name..." />
                        <AuthInput placeholder="Username..." />
                        <AuthInput placeholder="Email..." />
                        <AuthInput placeholder="Password..." />
                        <AuthInput placeholder="Repeat password..." />
                        <AuthButton value="Submit" />
                    </form>

                    <NavLink to="/">
                        <p className="transition hover:text-purple">go back</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
