import React from 'react';
import './styles/nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className='spc-nav-body'>
                <div className='spc-nav-title-div'>
                    <h2>Stock Price Calculator</h2>
                </div>
                <div className='spc-nav-right-div'>
                    <div>
                        <button className='spc-nav-buttons' id='spc-nav-login-btn'>login</button>
                    </div>
                    <div>
                        <button className='spc-nav-buttons' id='spc-nav-exit-btn'>exit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
