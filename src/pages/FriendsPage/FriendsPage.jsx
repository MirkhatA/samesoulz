import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import {useEffect, useState} from "react";
import {
    acceptRequest,
    deleteFriend,
    getAllFriends,
    getAllRequests,
    getAllRequestsFromMe,
    removeRequest,
    rejectRequest
} from "../../api/UserAPI.jsx";
import NavBtn from "../../components/ui/Friends/NavBtn/NavBtn.jsx";
import FriendBlock from "../../components/ui/Friends/FriendBlock/FriendBlock.jsx";
import FriendButton from "../../components/ui/Friends/FriendButton/FriendButton.jsx";
import {AiOutlineUserAdd} from "react-icons/ai";
import {TiCancel} from "react-icons/ti";
import {HiOutlineChatAlt} from "react-icons/hi";
import {FaUserAltSlash} from "react-icons/fa";
import {MdOutlineCancel} from "react-icons/md";

const FriendsPage = () => {
    const [requests, setRequests] = useState([]);
    const [friends, setFriends] = useState([]);
    const [myRequests, setMyRequests] = useState([]);

    const [btn, setBtn] = useState("reqToYou");

    useEffect(() => {
        getAllRequests().then(res => setRequests(res.data));
        getAllFriends().then(res => setFriends(res.data));
        getAllRequestsFromMe().then(res => setMyRequests(res.data));
    }, []);

    const requestList = requests.map((user) => (
        <FriendBlock
            key={user.id}
            user={user}
            buttons={[
                <FriendButton key={"add"} icon={<AiOutlineUserAdd />} onClick={() => {
                    acceptRequest(user.uuid).then((res) => console.log(res.data));
                    window.location.replace("/friends");
                }}/>,
                <FriendButton key={"reject"} icon={<TiCancel />} onClick={() => {
                    rejectRequest(user.uuid).then((res) => console.log(res.data));
                    window.location.replace("/friends");
                }}/>
            ]}
        />
    ));

    const friendsList = friends.map((user) => (
        <FriendBlock
            key={user.id}
            user={user}
            buttons={[
                <FriendButton key={"chat"} icon={<HiOutlineChatAlt />}/>,
                <FriendButton key={"delete"} icon={<FaUserAltSlash />} onClick={() => {
                    deleteFriend(user.uuid).then((res) => console.log(res.data));
                    window.location.replace("/friends");
                }}/>
            ]}
        />
    ));

    const requestFriends = myRequests.map((user) => (
        <FriendBlock
            key={user.id}
            user={user}
            buttons={[
                <FriendButton key={"cancel"} icon={<MdOutlineCancel />} onClick={() => {
                    removeRequest(user.uuid).then((res) => console.log(res.data));
                    window.location.replace("/friends");
                }}/>
            ]}
        />
    ));

    return (
        <div className="flex">
            <Navbar/>

            <div className="flex w-full justify-center">
                <div className="md:w-9/12 w-full flex">
                    <div className="md:w-9/12 w-full border border-grey p-5 m-1 rounded bg-lightGrey">
                        {btn === "reqToYou" &&
                            <div id="requestsToYou">
                                <p className="welcomePageTitle text-xl mb-5">
                                    Requests to you
                                </p>

                                <div className="flex">
                                    {requestList}
                                </div>
                            </div>}

                        {btn === "friends" &&
                            <div id="friends">
                                <p className="welcomePageTitle text-xl mb-5">
                                    Your friends
                                </p>

                                <div className="flex">
                                    {friendsList}
                                </div>
                            </div>}

                        {btn === "reqFromYou" &&
                            <div id="requestsFromYou">
                                <p className="welcomePageTitle text-xl mb-5">
                                    Requests from you
                                </p>

                                <div className="flex">
                                    {requestFriends}
                                </div>
                            </div>}
                    </div>

                    <div className="md:w-3/12 w-full">
                        <div className="border p-1 rounded border-grey m-1 bg-lightGrey">
                            <NavBtn onClick={() => setBtn("reqToYou")} value="Requests to you"></NavBtn> <br/>
                            <NavBtn onClick={() => setBtn("friends")} value="Your friends"></NavBtn> <br/>
                            <NavBtn onClick={() => setBtn("reqFromYou")} value="Requests from you"></NavBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
