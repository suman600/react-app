import React from 'react';
import toggle from '../../assets/images/hamberger.svg';
import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';
import deice from '../../assets/images/device.svg';

function Header({toggleSidebar}) {
    return (
        <header>
            <div className="headerText">
                <button className="navToggler" onClick={toggleSidebar}>
                    <img src={toggle}  alt="toggler"/>
                </button>
                Dashboard
            </div>
            <div className={'styleSwitcher'}>
                <button>Theme</button>
                <div className={'dropdown'}>
                    <button>
                        <img src={deice} style={{ width: 16, height: 16 }} alt="Default"/> OS Default
                    </button>
                    <button>
                        <img src={sun} style={{ width: 16, height: 16 }} alt="Light"/>Light
                    </button>
                    <button>
                        <img src={moon} style={{ width: 16, height: 16 }} alt="Dark"/>Dark
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
