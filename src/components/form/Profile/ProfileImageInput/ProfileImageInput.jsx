import PropTypes from "prop-types";

const ProfileImageInput = (props) => {
    const {
        title,
        onChange,
        name,
    } = props;

    return (
        <label>
            <p className="mt-2">{title}</p>
            <input
                name={name}
                className="border w-full p-2.5 border-grey rounded"
                type="file"
                encType="multipart/form-data"
                onChange={onChange}
            />
        </label>
    );
};

ProfileImageInput.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
}

export default ProfileImageInput;
