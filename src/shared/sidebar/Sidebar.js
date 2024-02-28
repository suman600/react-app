import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
function Sidebar({showSidebar}) {

    return (
        <aside className={`${showSidebar ? '': 'hidden'}`}>
            <ul className="sideNav">
                <li className="sideNavItem" >
                    <Link className="sideNavItemLink"  to={"/"}>Dashboard</Link>
                </li>
                <li className="sideNavItem">
                    <Link className="sideNavItemLink" to={"/game"}>Game</Link>
                </li>
                <li className="sideNavItem">
                    <Link className="sideNavItemLink" to={"/users"}>Users</Link>
                </li>
                <li className="sideNavItem">
                    <Link className="sideNavItemLink" to={"/color"}>Color Picker</Link>
                </li>
            </ul>

        </aside>
    );
}
export default Sidebar;
