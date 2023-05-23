import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const ProfileRadio = (props) => {
    const { title, onChange, value} = props;

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked((value === "MALE"));

        console.log(checked);
    }, []);

    return (
        <label>
            <p>{title}</p>
            <input
                type="radio"
                value="MALE"
                name="gender"
                className="mr-1"
                onChange={onChange}
                checked
            />
            Male
            <input
                type="radio"
                value="FEMALE"
                name="gender"
                className="ml-5 mr-1"
                onChange={onChange}
                checked={checked}
            />
            Female
        </label>
    );
};

ProfileRadio.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
}

export default ProfileRadio;
