import PropTypes from "prop-types";

const ProfileInput = (props) => {
    const {
        title,
        type,
        onChange,
        name,
        value,
    } = props;

    return (
        <label>
            <p className="mt-2">{title}</p>
            <input
                name={name}
                className="border w-full p-2.5 border-grey rounded"
                type={type}
                onChange={onChange}
                value={value}
                required
            />
        </label>
    );
};

ProfileInput.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
}

export default ProfileInput;
