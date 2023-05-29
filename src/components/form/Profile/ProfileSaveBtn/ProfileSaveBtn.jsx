import "./ProfileSaveBtn.css";
import PropTypes from "prop-types";

const ProfileSaveBtn = (props) => {
    const {
        value
    } = props;

    return (
        <button className="mt-2 border p-2 rounded-lg button-87 w-full">
            {value}
        </button>
    );
};

ProfileSaveBtn.propTypes = {
    value: PropTypes.string,
}

export default ProfileSaveBtn;
