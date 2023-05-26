import PropTypes from "prop-types";

const SuggestionBtn = (props) => {
    const { value, color, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={`transition bg-white rounded mr-1 mt-2 border-2 border-${color} p-2 hover:bg-${color} hover:text-light hover:border-black`}
        >
            {value}
        </button>
    );
};

SuggestionBtn.propTypes = {
    value: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default SuggestionBtn;
