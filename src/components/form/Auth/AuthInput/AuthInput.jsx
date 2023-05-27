import {TbEdit} from "react-icons/tb";
import PropTypes from "prop-types";

import "./AuthInput.css";

const AuthInput = (props) => {
    const {
        placeholder,
        name,
        type,
        onChange
    } = props;
    return (
        <label
            className="authInput flex items-center p-3
            border-2 border-grey rounded w-full my-1"
        >
            <TbEdit className="authInputIcon"/>
            <input name={name} className="w-full" type={type} placeholder={placeholder} onChange={onChange} required/>
        </label>
    );
};

AuthInput.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func
}

export default AuthInput;
