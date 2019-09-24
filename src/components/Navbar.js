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
                                    <button className="nav-link" onClick="" >HOME</button>
                                </div>

                                <div className="nav-item">
                                    <button className="nav-link" onClick="" >ABOUT</button>
                                </div>

                                <div className="nav-item">
                                    <button className="nav-link" onClick="" >COLLECTIONS</button>
                                </div>

                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }

}