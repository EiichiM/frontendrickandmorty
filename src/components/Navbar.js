import React from 'react';
import '../assets/navbar.css';




export default class Example extends React.Component {
    render() {
        return (
            <div>

                <div className='nav' style={{ backgroundcolor: '#ffffff' }}>
                    <nav className="navbar navbar-expand-lg">

                        <div className="collapse navbar-collapse nav-options-container" id="navbarSupportedContent">
                            <ul className="navbar-nav" style={{ color: '#000000' }}>

                                <div className="nav-item">
                                    <li className="nav-link" >HOME</li>
                                </div>

                                <div className="nav-item">
                                    <li className="nav-link" >ABOUT</li>
                                </div>

                                <div className="nav-item">
                                    <li className="nav-link" >COLLECTIONS</li>
                                </div>

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }

}