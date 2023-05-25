import { useEffect, useState } from "react";
import Navbar from "../../components/ui/Navbar/Navbar.jsx";

import { getReccomendedUsers } from "../../api/UserAPI.jsx";
import SuggestionCard from "../../components/ui/Suggestion/SuggestionCard/SuggestionCard.jsx";

const HomePage = () => {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(() => {
        getReccomendedUsers(localStorage.getItem("username")).then((res) =>
            setSuggestedUsers(res.data)
        );
    }, []);

    const userList = suggestedUsers.map((user) => (
        <SuggestionCard key={user.id} user={user} />
    ));

    return (
        <div className="flex">
            <Navbar />
            <div className="flex w-full justify-center items-center flex-col">
                <p>You might like</p>

                {userList.at(0)}
            </div>
        </div>
    );
};

export default HomePage;
