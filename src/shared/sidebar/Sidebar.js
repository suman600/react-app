import React from 'react';
import {Link} from "react-router-dom";
function Sidebar() {
    return (
        <aside>
            <ul className="sideNav">
                <li className="sideNavItem">
                    <a className="sideNavItemLink" href="/">Dashboard</a>
                </li>
                <li className="sideNavItem">
                    <a className="sideNavItemLink" href="/game">Game</a>
                </li>
                <li className="sideNavItem">
                    <a className="sideNavItemLink" href="/users">Users</a>
                </li>
            </ul>

        </aside>
    );
}
export default Sidebar;
