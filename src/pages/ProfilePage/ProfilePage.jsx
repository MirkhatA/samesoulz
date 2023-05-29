import ProfileInput from "../../components/form/Profile/ProfileInput/ProfileInput.jsx";
import ProfileRadio from "../../components/form/Profile/ProfileRadio/ProfileRadio.jsx";
import ProfileSaveBtn from "../../components/form/Profile/ProfileSaveBtn/ProfileSaveBtn.jsx";
import ProfileTextarea from "../../components/form/Profile/ProfileTextarea/ProfileTextarea.jsx";
import Navbar from "../../components/ui/Navbar/Navbar.jsx";

import {
    getAll,
    getUserInterests,
    deleteAllInterests,
    addInterestList,
} from "../../api/InterestAPI.jsx";
import {useEffect, useState} from "react";
import InterestBtn from "../../components/form/Profile/InterestBtn/InterestBtn.jsx";
import {
    updateUser,
    updateProfilePicture,
    getUserData, getProfilePicture, deleteProfilePicture,
} from "../../api/UserAPI.jsx";
import Lottie from "lottie-react";
import CheckAnimation from "../../assets/gifs/check-green.json";
import ProfileImageInput from "../../components/form/Profile/ProfileImageInput/ProfileImageInput.jsx";

const ProfilePage = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        username: "",
        location: "",
        bio: "",
        userInterests: [],
    };

    const uuid = localStorage.getItem("uuid");

    const [picture, setPicture] = useState("")

    const [img, setImg] = useState("");

    const [formData, setData] = useState(initialState);
    // all interests
    const [interestList, setInterestList] = useState([]);
    // picked interests
    const [pickedInterestList, setPickedInterestList] = useState([]);
    // users interests
    const [userInterestList, setUserInterestList] = useState([]);

    const [arr, setArr] = useState([]);
    const [hideForm, setHideForm] = useState(false);

    const onChange = (e) => {
        const {name, value} = e.target;
        setData({...formData, [name]: value});
    };

    const interests = interestList.map((interest) => (
        <InterestBtn
            key={interest.id}
            id={interest.id}
            name={interest.name}
            isChecked={userInterestList.some((e) => e.name === interest.name)}
            onClick={() => {
                if (!arr.includes(interest)) {
                    arr.push(interest);
                } else if (arr.includes(interest)) {
                    const i = arr.indexOf(interest);
                    arr.splice(i, 1);
                }
                setPickedInterestList(arr);
            }}
        />
    ));

    useEffect(() => {
        getUserData(localStorage.getItem("username")).then((res) => {
            setData({
                ...formData,
                firstName: res.data.firstName.toString(),
                lastName: res.data.lastName.toString(),
                gender: res.data.gender !== null ? res.data.gender.toString() : "Male",
                age: res.data.age !== null ? res.data.age.toString() : "18",
                username: localStorage.getItem("username"),
                location: res.data.location !== null ? res.data.location.toString() : "Astana",
                bio: res.data.bio !== null ? res.data.bio.toString() : "",
            });
        });

        getUserInterests(localStorage.getItem("username")).then((res) => {
            setUserInterestList(res.data);
        });

        getAll().then((res) => {
            setInterestList(res.data);
        });

        getProfilePicture(uuid).then(res => setImg(URL.createObjectURL(res.data)))
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const imgData = new FormData();
        imgData.append('picture', picture);

        try {
            if (picture !== "") {
                deleteProfilePicture().then((res) => console.log("picture deleted: " + res.status));

                updateProfilePicture(picture)
                    .then((res) => console.log("Update profile pic: " + res.status))
                    .catch((err) => console.log(err));
            }

            deleteAllInterests(formData.username, pickedInterestList)
                .then((res) =>
                    console.log("Delete all interests: " + res.status)
                )
                .catch((err) => console.log(err.message));

            addInterestList(formData.username, pickedInterestList)
                .then((res) => console.log("Add all interests: " + res.status))
                .catch((err) => console.log(err.message));

            updateUser(formData)
                .then((res) => {
                    localStorage.setItem("username", res.data.username);
                    console.log(res.status);
                })
                .catch((err) => {
                    console.log(err);
                });

            setHideForm(true);

            setTimeout(() => window.location.replace("/profile"), 1000);

            location.reload();
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="flex">
            <Navbar/>

            <div className="flex w-full justify-center">
                <div className="lg:w-9/12 w-full">
                    <div className={`${hideForm ? `block` : "hidden"} flex flex-col items-center justify-center`}>
                        <Lottie
                            className="w-52"
                            animationData={CheckAnimation}
                            autoplay={true}
                            loop={true}
                        />
                    </div>

                    <div className={`inline-block m-10 ${hideForm ? "hidden" : "block"}`}>
                        <form onSubmit={onSubmit}>
                            <div className="xl:flex justify-between lg:flex-nowrap">
                                <div className="xl:w-1/3 lg:w-full mr-2">
                                    <p className="welcomePageTitle text-xl mb-5">
                                        Profile
                                    </p>

                                    <img src={img} alt=""/>

                                    <ProfileImageInput
                                        title="Avatar"
                                        name="picture"
                                        onChange={(e) => {
                                            setPicture(e.target.files[0])
                                        }}
                                    />

                                    <ProfileInput
                                        title="First name"
                                        name="firstName"
                                        type="text"
                                        onChange={onChange}
                                        value={formData.firstName}
                                    />
                                    <ProfileInput
                                        title="Last name"
                                        name="lastName"
                                        type="text"
                                        onChange={onChange}
                                        value={formData.lastName}
                                    />
                                    <ProfileInput
                                        title="Age"
                                        name="age"
                                        type="number"
                                        onChange={onChange}
                                        value={formData.age}
                                    />
                                    <ProfileInput
                                        title="Username"
                                        name="username"
                                        type="text"
                                        onChange={onChange}
                                        value={formData.username}
                                    />
                                    <ProfileInput
                                        title="Location"
                                        name="location"
                                        type="text"
                                        onChange={onChange}
                                        value={formData.location}
                                    />
                                    <ProfileTextarea
                                        title="About me"
                                        name="bio"
                                        onChange={onChange}
                                        value={formData.bio}
                                    />
                                    <ProfileSaveBtn value="Save"/>
                                </div>
                                <div className="xl:ml-4 w-2/3 w-full">
                                    <p className="welcomePageTitle text-xl">
                                        Interests
                                    </p>
                                    <p className="my-2">
                                        The selection of people will be for your
                                        interests and hobbies, so choose carefully
                                    </p>

                                    <div className="flex flex-wrap">
                                        {interests}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
