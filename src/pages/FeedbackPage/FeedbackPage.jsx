import {useState} from "react";
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import ProfileInput from "../../components/form/Profile/ProfileInput/ProfileInput.jsx";
import ProfileTextarea from "../../components/form/Profile/ProfileTextarea/ProfileTextarea.jsx";
import ProfileSaveBtn from "../../components/form/Profile/ProfileSaveBtn/ProfileSaveBtn.jsx";

import s from "./Feedback.css";
import Img from "../../assets/images/logo_img.png";

const FeedbackPage = () => {
    const [title, setTitle] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title);
        console.log(msg);
    }

    return (
        <div className="flex">
            <Navbar/>

            <div className="flex w-full justify-center items-center">
                <div>
                    <p className="welcomePageTitle text-xl mb-5 text-center">
                        Contact us
                    </p>

                    <form onSubmit={handleSubmit}>
                        <ProfileInput
                            title="Title"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <ProfileTextarea
                            title="Message"
                            name="msg"
                            onChange={e => setMsg(e.target.value)}
                        />

                        <ProfileSaveBtn value="Send" />
                    </form>
                </div>
                <div className={s.avatar}>
                    <img src={Img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
