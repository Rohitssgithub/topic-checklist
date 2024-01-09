import React, { useState, useEffect } from "react";
import './Sidebar.css'
import { Link, useLocation } from "react-router-dom";
import { sideBarNavigation } from "./Navigation";
import { NavLink } from "react-router-dom";
import { PATH } from "../../constant/constant";
import { IoIosHome } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const Sidebar = ({ increaseLengthFun, open }) => {
    const [currentPath, setCurrentPath] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = getToken();
        setIsLoggedIn(!!token);
    }, []);

    const getToken = () => {
        const userDataString = localStorage.getItem('userData');
        let userData = JSON.parse(userDataString);
        return userData?.token;
    }

    const ToggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleSettingsDropdown = (pageName) => {
        if (openDropdown === pageName) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(pageName);
        }
    }

    const closeSettingsDropdown = () => {
        setOpenDropdown(null);
    }

    return (
        <>
            {/* <div className="container-fluid p-0"> */}
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                    <div className="container-fluid p-2">
                        <div className="form-inline me-auto">
                            <div className="btn btn-primary" onClick={increaseLengthFun}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav> */}
            <div className={`sidebars ${open ? ' sidebars active' : ''}`}>
                <div className="sd-header">
                    <div onClick={increaseLengthFun} className='openBtn'>
                        {
                            open ?
                                <i class="fa-solid fa-x" style={{ color: "#eaecf0" }}></i>
                                :
                                <i class="fa-solid fa-bars" style={{ color: "#eaecf0" }}></i>
                        }
                    </div>
                </div>
                <div className="sd-body">
                    {Object.values(PATH.privateRoutes).map((ele) => {
                        if (ele.children) {
                            return (
                                <li key={ele.path} className="innerLink">
                                    <span
                                        className={`mainLinkNav ${openDropdown === ele.pageName ? 'active' : ''}`}
                                        onClick={() => toggleSettingsDropdown(ele.pageName)}
                                    >
                                        {ele.pageName}
                                    </span>
                                    {openDropdown === ele.pageName && (
                                        <ul className="user-settings-dropdown">
                                            {Object.values(ele.children).map((child) => (
                                                <li key={child.path}>
                                                    <NavLink
                                                        className="linksDrop"
                                                        to={child.path}
                                                        onClick={closeSettingsDropdown}
                                                    >
                                                        {/* {child.pageName} */}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        } else {
                            return (
                                <>
                                    <Link className='mainLinkNav' to={ele.path}>{ele.pageName}</Link>
                                </>
                            );
                        }
                    })}

                    <Link className='mainLinkNav' onClick={() => localStorage.clear()} to='/login'>Logout</Link>
                    <ul>
                        {/* {sideBarNavigation
                                .map((data) => {
                                    return (
                                        <>
                                            <NavLink
                                                key={data.id}
                                                to={data.path}
                                                state={{ previousPath: location.pathname }}
                                            >
                                                <div>
                                                    <p
                                                        className="linksDrop"
                                                        onClick={closeSettingsDropdown}
                                                    >{data.pageName}</p>
                                                </div>
                                            </NavLink>
                                        </>
                                    )
                                })
                            }
                            <Link className='mainLinkNav' onClick={() => localStorage.clear()} to='/login'>Logout</Link> */}
                    </ul>
                </div>
            </div>
            {/* <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={ToggleSidebar}></div> */}
            {/* </div> */}
        </>
    )
}

export default Sidebar;



