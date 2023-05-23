import PropTypes from "prop-types";

const ProfileTextarea = (props) => {
    const { title, name, onChange, value } = props;

    return (
        <label>
            <p>{title}</p>
            <textarea className="border border-grey w-full rounded p-2" name={name} onChange={onChange} value={value}></textarea>
        </label>
    );
};

ProfileTextarea.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
}

export default ProfileTextarea;
