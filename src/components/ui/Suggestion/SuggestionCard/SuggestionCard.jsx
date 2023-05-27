import PropTypes from "prop-types";
import SuggestionBtn from "../SuggestionBtn/SuggestionBtn.jsx";
import {useEffect, useState} from "react";
import {getIsRequestSent, removeRequest, sendRequestToFriend} from "../../../../api/UserAPI.jsx";

const SuggestionCard = (props) => {
    const {
        user,
        skip,
    } = props;

    const [isFriend, setIsFriend] = useState(false);

    const interests = user.interests.map((interest) =>
        <span key={interest.id}>{interest.name}, </span>
    );

    useEffect(() => {
        getIsRequestSent(user.uuid).then(res => setIsFriend(res.data));
    }, [user]);

    console.log(isFriend);

    return (
        <div className="bg-lightGrey border-grey rounded lg:flex m-2">
            <div className=" md:w-96 w-80 h-80">img</div>
            <div className=" md:w-96 w-80 h-80 p-4">
                <p className="text-2xl">
                    {user.firstName} {user.lastName}
                </p>
                <p className="font-bold text-sm">@{user.username}</p>

                <p className="flex">
                    <span className="pr-2">{user.age}y/o</span>
                    <span className="pr-2">{user.location}</span>
                    <span className="pr-2">{user.gender}</span>
                </p>
                <br/>
                <p>{user.bio}</p>
                <p className="text-sm mt-5">Interested in:</p>
                <p>{interests}</p>
                <div>
                    {!isFriend &&
                        <SuggestionBtn
                            value="Request"
                            color="purple"
                            onClick={() => sendRequestToFriend(user.uuid).then(() => setIsFriend(true))}
                        />
                    }

                    {isFriend &&
                        <SuggestionBtn
                            value="Remove request"
                            color="purple"
                            onClick={() => removeRequest(user.uuid).then(() => setIsFriend(false))}
                        />
                    }

                    <SuggestionBtn
                        value="Skip"
                        color="black"
                        onClick={skip}
                    />
                </div>
            </div>
        </div>
    );
};

SuggestionCard.propTypes = {
    user: PropTypes.object,
    skip: PropTypes.func,
};

export default SuggestionCard;
