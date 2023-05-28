import PropTypes from "prop-types";

const NavBtn = (props) => {
    const {
        onClick,
        value,
    } = props;

    return (
        <button
            onClick={onClick}
            className="my-1 p-3 w-full text-left rounded hover:bg-light"
        >
            {value}
        </button>
    );
};

NavBtn.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string,
}

export default NavBtn;
