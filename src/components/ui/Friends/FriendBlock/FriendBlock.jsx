import PropTypes, {string} from "prop-types";
import {useEffect, useState} from "react";
import {getIsRequestSent, getProfilePicture} from "../../../../api/UserAPI.jsx";

const FriendBlock = (props) => {
    const {
        user,
        buttons,
    } = props;

    const [pic, setPic] = useState("");

    useEffect(() => {
        getProfilePicture(user.uuid).then(res => setPic(URL.createObjectURL(res.data)))
    }, [user]);

    return (
        <div className="border border-grey bg-light rounded-lg p-1 w-fit mr-2 mb-2">
            <div className="flex">
                <div className="w-28 h-28">
                    <img
                        className="object-cover rounded-lg w-full h-full"
                        src={pic}
                        alt=""/>
                </div>
                <div className="flex-wrap">
                    {buttons}
                </div>
            </div>


            <p>{user.firstName} {user.lastName}</p>
            <div>

            </div>
        </div>
    );
};

FriendBlock.propTypes = {
    user: PropTypes.object,
    buttons: PropTypes.array
}

export default FriendBlock;
