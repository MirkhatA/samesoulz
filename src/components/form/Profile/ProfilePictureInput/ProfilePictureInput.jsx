import PropTypes from "prop-types";

const ProfilePictureInput = (props) => {
    const {
        onChange,
    } = props;

    return (
        <label>
            <input onChange={onChange} type="file" />
        </label>
    );
};

ProfilePictureInput.propTypes = {
    onChange: PropTypes.func,
}

export default ProfilePictureInput;
