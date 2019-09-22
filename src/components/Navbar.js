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

                                <li className="nav-item">
                                    <p className="nav-link" >HOME</p>
                                </li>

                                <li className="nav-item">
                                    <p className="nav-link" >ABOUT</p>
                                </li>

                                <li className="nav-item">
                                    <p className="nav-link" >COLLECTIONS</p>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }

}