import { RiGhost2Line } from "react-icons/ri";

import "./Navbar.css";
import { AiOutlineUserSwitch, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {disconnect} from "../../../api/NotificationsAPI.jsx";

const Navbar = () => {
    const leave = () => {
        localStorage.clear();
        disconnect();
        window.location.replace("/");
    };

    return (
        <div
            className="top-0 h-screen w-20 m-0 justify-center
                       flex flex-col bg-lightGrey text-white"
        >
            <Link to="/">
                <SideBarIcon icon={<RiGhost2Line size="25" />} text="Home" />
            </Link>

            <Link to="/profile">
                <SideBarIcon
                    icon={<AiOutlineUserSwitch size="22" />}
                    text="Profile"
                />
            </Link>

            <Link to="/friends">
                <SideBarIcon
                    icon={<AiOutlineUsergroupAdd size="22" />}
                    text="Friends"
                />
            </Link>

            <Link to="/messages">
                <SideBarIcon
                    icon={<BiMessageAltDetail size="22" />}
                    text="Messages"
                />
            </Link>

            <div onClick={leave}>
                <SideBarIcon icon={<CgLogOut size="22" />} text="Logout" />
            </div>
        </div>
    );
};

const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
);

SideBarIcon.propTypes = {
    icon: PropTypes.any,
    text: PropTypes.string,
};

export default Navbar;
