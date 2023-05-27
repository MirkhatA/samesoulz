import {NavLink} from "react-router-dom";
import {motion as m} from "framer-motion";

import Logo from "../../assets/images/logo_img.png";
import AuthInput from "../../components/form/Auth/AuthInput/AuthInput";
import AuthButton from "../../components/form/Auth/AuthButton/AuthButton";
import {useState} from "react";
import {login, register} from "../../api/UserAPI.jsx";
import Lottie from "lottie-react";
import CheckAnimation from "../../assets/gifs/check.json";

const RegisterPage = () => {
    const initialState = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        repeatPassword: "",
        username: "",
    };

    const [formData, setData] = useState(initialState);
    const [err, setErr] = useState("");
    const [hideForm, setHideForm] = useState(false);

    const onChange = (e) => {
        const {name, value} = e.target;
        setData({...formData, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.repeatPassword) {
            setErr("Passwords are different");
        } else if (formData.password.length < 8) {
            setErr("password must be more than 8 characters")
        } else {
            register(formData)
                .then(() => {
                    setHideForm(true)

                    setTimeout(() => window.location.replace("/login"), 1000);
                })
                .catch(() => {
                    setErr("Something went wrong")
                })
        }

        console.log(formData);
    }

    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, ease: "easeOut"}}
            className="flex justify-center items-center h-screen"
        >
            <div className="w-11/12 sm:w-80 font-dmsansRegular">
                <div className="flex flex-col items-center">
                    <img className="w-20" src={Logo} alt="logo_img"/>

                    <div className={hideForm ? `block` : 'hidden'}>
                        <Lottie
                            animationData={CheckAnimation}
                            autoplay={true}
                            loop={true}
                        />
                    </div>

                    <div className={hideForm ? `hidden` : 'block w-full'}>
                        <p className="welcomePageTitle text-xl">Register</p>

                        <p className="mt-4 text-red">{err}</p>

                        <form className="w-full mt-5" onSubmit={onSubmit}>
                            <AuthInput
                                placeholder="First name..."
                                name="firstName"
                                type="text"
                                onChange={onChange}
                            />
                            <AuthInput
                                placeholder="Last name..."
                                name="lastName"
                                type="text"
                                onChange={onChange}
                            />
                            <AuthInput
                                placeholder="Username..."
                                name="username"
                                type="text"
                                onChange={onChange}
                            />
                            <AuthInput
                                placeholder="Email..."
                                name="email"
                                type="username"
                                onChange={onChange}
                            />
                            <AuthInput
                                placeholder="Password..."
                                name="password"
                                type="password"
                                onChange={onChange}
                            />
                            <AuthInput
                                placeholder="Repeat password..."
                                name="repeatPassword"
                                type="password"
                                onChange={onChange}
                            />
                            <AuthButton value="Submit"/>
                        </form>

                        <NavLink to="/">
                            <p className="transition hover:text-purple">go back</p>
                        </NavLink>
                    </div>

                </div>
            </div>
        </m.div>
    );
};

export default RegisterPage;
