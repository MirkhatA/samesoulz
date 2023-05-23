import {NavLink} from "react-router-dom";
import {useState} from "react";
import {motion as m} from "framer-motion";
import Lottie from "lottie-react";

import Logo from "../../assets/images/logo_img.png";
import AuthInput from "../../components/form/Auth/AuthInput/AuthInput";
import AuthButton from "../../components/form/Auth/AuthButton/AuthButton";
import CheckAnimation from "../../assets/gifs/check.json";

import {login} from "../../api/UserAPI.jsx";

const LoginPage = () => {
    const initialState = {
        email: "",
        password: "",
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

        login(formData)
            .then((res) => {
                localStorage.setItem("uuid", res.data.uuid);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("token", res.data.token);

                setHideForm(true)

                setTimeout(() => window.location.replace("/"), 1000);

            })
            .catch(() => {
                setErr("Wrong email or password");
            });

    }

    return (
        <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, ease: "easeOut"}}
        >
            <div className="flex justify-center items-center h-screen">
                <div className="w-11/12 sm:w-80 font-dmsansRegular">
                    <div className="flex flex-col items-center">
                        <img className="w-20" src={Logo} alt="logo_img"/>

                        <div className={hideForm ? `block` : 'hidden'}>
                            <Lottie animationData={CheckAnimation} />
                        </div>

                        <div className={hideForm ? `hidden` : 'block w-full'}>
                            <p className="welcomePageTitle text-xl">Login</p>

                            <p className="mt-4 text-red">{err}</p>

                            <form className="w-full mt-5" onSubmit={onSubmit}>
                                <AuthInput
                                    placeholder="Email..."
                                    name="email"
                                    type="text"
                                    onChange={onChange}
                                />
                                <AuthInput
                                    placeholder="Password..."
                                    name="password"
                                    type="password"
                                    onChange={onChange}
                                />
                                <AuthButton value="Submit"/>
                            </form>

                            <NavLink to="/">
                                <p className="text-center transition hover:text-purple">
                                    go back
                                </p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    );
};

export default LoginPage;
