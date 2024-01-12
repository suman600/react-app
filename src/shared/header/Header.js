import React from 'react';
import toggler from '../../images/hamberger.svg'
function Header() {
    return (
        <header>
            <div className="headerText">
                <button className="navToggler">
                    <img src={toggler} alt="toggler"/>
                </button>
                Dashboard</div>
        </header>
    );
}
export default Header;
