import PropTypes from "prop-types";

const FriendButton = (props) => {
    const {
        icon,
        onClick,
    } = props;

    return (
        <button onClick={onClick} className="flex duration-300 border p-2 rounded-full border-grey hover:bg-red m-1">
            {icon}
        </button>
    );
};

FriendButton.propTypes = {
    icon: PropTypes.object,
    onClick: PropTypes.func,
}

export default FriendButton;
