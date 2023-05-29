import {useEffect, useState} from 'react';
import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import {getAllFriends} from "../../api/UserAPI.jsx";

import s from "./MessagePage.css";
import ChatFriendButton from "../../components/ui/Chat/ChatFriendButton/ChatFriendButton.jsx";
import {connectChat, disconnect, getAllMessages, sendMessage} from "../../api/ChatAPI.jsx";
import MessageBlock from "../../components/ui/Chat/MessageBlock/MessageBlock.jsx";
import {toast, ToastContainer} from "react-toastify";
import {BsFillSendFill} from "react-icons/bs";

const MessagePage = () => {
    const [friends, setFriends] = useState([]);
    const [targetUser, setTargetUser] = useState("");
    const [messages, setMessages] = useState([]);
    const [senderMsg, setSenderMsg] = useState("");

    useEffect(() => {
        getAllFriends().then(res => setFriends(res.data));
    }, []);

    const friendList = friends.map((user) =>
        <ChatFriendButton
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            onClick={() => {
                disconnect();
                connectChat();
                setMessages([]);
                setTargetUser(user);
                getAllMessages(user.uuid).then(res => setMessages(res.data));
            }
            }
        />
    )

    const onSubmit = (e) => {
        e.preventDefault();

        sendMessage(targetUser, senderMsg);
        getAllMessages(targetUser.uuid).then(res => setMessages(res.data));
        getAllMessages(targetUser.uuid).then(res => setMessages(res.data));
    }

    return (
        <div className="flex">
                        <Navbar/>
            <div className="flex w-full justify-center items-center flex-col w-9/12 p-5">
                <div className="flex flex-nowrap border border-grey 2xl:w-2/3 w-full bg-lightGrey h-2/3 rounded-lg">
                    <div className="w-1/4 mt-2 mx-1 overflow-auto">
                        <p className="text-center text-xl mb-5">Your friends</p>
                        {friendList}
                    </div>

                    <div className={`w-3/4 ${s.chatBlock} h-full`}>
                        <div className={`overflow-auto h-full ${s.messageMain}`}>
                            <div className={`h-1/6 justify-center flex items-center w-full`}>
                                <p className='welcomePageTitle text-xl'>{targetUser.username}</p>
                            </div>

                            <div className={`h-4/6 bg-light border border-grey rounded-lg p-5 mr-2 overflow-auto`}>
                                <MessageBlock messages={messages}/>
                            </div>

                            <div className={` mr-2`}>
                                <label className="flex items-center w-full border-1 rounded-lg border-grey mt-5 bg-light mr-2">
                                    <input
                                        type="text"
                                        id="text"
                                        placeholder="message"
                                        className="w-full m-1 outline-0"
                                        onChange={e => setSenderMsg(e.target.value)}
                                    />
                                    <button className="text-xl p-2 m-2" onClick={onSubmit}><BsFillSendFill/></button>
                                </label>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagePage;
