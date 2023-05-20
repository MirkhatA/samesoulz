import { TbEdit } from "react-icons/tb";

import "./AuthInput.css";

const AuthInput = (props) => {
    const { placeholder } = props;
    return (
        <label
            className="authInput flex items-center p-3 
            border-2 border-grey rounded w-full my-1"
        >
            <TbEdit className="authInputIcon" />
            <input className="w-full" type="text" placeholder={placeholder} />
        </label>
    );
};

export default AuthInput;
