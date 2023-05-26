import PropTypes from "prop-types";
import SuggestionBtn from "../SuggestionBtn/SuggestionBtn.jsx";

const SuggestionCard = (props) => {
    const {user} = props;

    const interests = user.interests.map((interest) =>
        <span key={interest.id}>{interest.name}, </span>
    );

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
                    <SuggestionBtn
                        value="Request"
                        color="purple"
                        onClick={() => console.log("request")}
                    />
                    <SuggestionBtn
                        value="Skip"
                        color="black"
                        onClick={props.skip}
                    />
                </div>
            </div>
        </div>
    );
};

SuggestionCard.propTypes = {
    user: PropTypes.object,
};

export default SuggestionCard;
