import Navbar from "../../components/ui/Navbar/Navbar.jsx";
import {useEffect, useState} from "react";
import {getAllFriends, getAllRequests, getAllRequestsToMe} from "../../api/UserAPI.jsx";

const FriendsPage = () => {
    const [requests, setRequests] = useState([]);
    const [friends, setFriends] = useState([]);
    const [myRequests, setMyRequests] = useState([]);


    const [btn, setBtn] = useState("reqToYou");


    useEffect(() => {
        getAllRequests().then(res => setRequests(res.data));
        getAllFriends().then(res => setFriends(res.data));
        getAllRequestsToMe().then(res => setMyRequests(res.data));
    }, []);

    return (
        <div className="flex">
            <Navbar/>

            <div className="flex w-full justify-center">
                <div className="w-9/12 border flex">
                    <div className="w-9/12 border p-5">
                        {
                            btn === "reqToYou" &&
                            <div id="requestsToYou">
                                <p className="welcomePageTitle text-xl mb-5">
                                    Requests to you
                                </p>
                            </div>
                        }

                        {
                            btn === "friends" &&
                            <div id="friends">
                                <p className="welcomePageTitle text-xl mb-5">
                                    Your friends
                                </p>
                            </div>
                        }

                        {
                            btn === "reqFromYou" &&
                            <div id="requestsFromYou">
                                <p className="welcomePageTitle text-xl mb-5">
                                    Requests from you
                                </p>
                            </div>
                        }

                    </div>

                    <div className="w-3/12 border">
                        <button onClick={() => setBtn("reqToYou")}>Requests to you</button> <br/>
                        <button onClick={() => setBtn("friends")}>Your friends</button> <br/>
                        <button onClick={() => setBtn("reqFromYou")}>Requests from you</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsPage;
