import { FiLogIn } from "react-icons/fi";

import "./AuthButton.css";

const AuthButton = (props) => {
    const { value } = props;

    return (
        <button
            className="w-full border-2 border-purple rounded
            flex items-center p-3 my-1 text-purple auth-button"
        >
            <FiLogIn className="mr-3" />
            <p>{value}</p>
        </button>
    );
};

export default AuthButton;
