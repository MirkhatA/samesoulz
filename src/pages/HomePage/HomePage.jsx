import {useEffect, useState} from "react";
import Navbar from "../../components/ui/Navbar/Navbar.jsx";

import {getRecommendedUsers} from "../../api/UserAPI.jsx";
import SuggestionCard from "../../components/ui/Suggestion/SuggestionCard/SuggestionCard.jsx";

const HomePage = () => {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {
        getRecommendedUsers(localStorage.getItem("username")).then((res) =>
            setSuggestedUsers(res.data)
        );
    }, []);

    const userList = suggestedUsers.map((user) => (
        <SuggestionCard
            key={user.id}
            user={user}
            skip={() => {
                suggestedUsers.shift();
                setCurrentUser(userList.at(0));
            }}
        />
    ));

    return (
        <div className="flex">
            <Navbar/>
            <div className="flex w-full justify-center items-center flex-col">
                {userList.length <= 0 &&
                    <button
                        className="border p-2 rounded border-2"
                        onClick={() => location.reload()}
                    >Start over</button>
                }
                <div>
                    <p>You might like</p>

                    {userList.at(0)}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
