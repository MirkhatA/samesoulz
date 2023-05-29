import PropTypes from "prop-types";

const ChatFriendButton = (props) => {
    const {
        firstName,
        lastName,
        onClick
    } = props;

    return (
        <button
            onClick={onClick}
            className="w-full text-start border-2 p-3 rounded bg-light border border-grey hover:bg-purple hover:border-black duration-200"
        >
            {firstName} {lastName}
        </button>
    );
};

ChatFriendButton.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    onClick: PropTypes.func
}

export default ChatFriendButton;
