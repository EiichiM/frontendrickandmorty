import React from "react"
import Rick from "../img/Rick.svg"
import Morty from "../img/Morty.svg"
import "../assets/hero.css"

export default class Example extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="rick">
                    <img src={Rick} alt="" />
                </div>
                <div className="titulos">
                    <div className="ram">
                        <h1>THE RICK AND MORTY</h1>
                    </div>
                    <div className="h2">
                        <h2>HEY, DID YOU EVER WANT TO HOLD A TERRY FOLD</h2>
                    </div>
                </div>
                <div className="morty">
                    <img src={Morty} alt="" />
                </div>
            </div>
        )
    }


}