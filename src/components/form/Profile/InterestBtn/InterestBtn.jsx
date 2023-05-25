import PropTypes from "prop-types";
import {useState} from "react";

const InterestBtn = (props) => {
    const {
        name,
        onClick,
        isChecked
    } = props;

    const [checked, setChecked] = useState(isChecked);

    return (
        <label className={`${checked ? `bg-purple` : `bg-white`} border-2 ease-in duration-100 cursor-pointer border rounded mr-2 mb-2 mt-1 p-3`}>
            <input
                className="hidden"
                type="checkbox"
                onClick={() => {
                    onClick();
                    setChecked(!checked)
                }}
            />
            {name}
        </label>
    );
};

InterestBtn.propType = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    isChecked: PropTypes.bool,
};

export default InterestBtn;
