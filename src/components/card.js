import React, { Component } from 'react'
import '../assets/cards.css'
import "./cards"


export class cards extends Component {

  state = {
    cardPosition: 1,
    infoPosition: '-300%',
    cardHeight: '200px'
  }

  changePosition = () => {
    console.log(this.state.cardPosition)
    if (this.state.cardPosition === 1) {
      this.setState({ cardPosition: -1 })
    } else {
      this.setState({ cardPosition: 1 })
    }
  }

  showInfo = () => {
    console.log('prueba')
    if (this.state.infoPosition === '-300%') {
      this.setState({
        infoPosition: '0%',
        cardHeight: '300px'
      })
    } else {
      this.setState({
        infoPosition: '-200%',
        cardHeight: '150px'
      })
    }
  }

  render() {
    return (
      <div className='card mt-3' style={{ height: this.state.cardHeight, width: "200px" }}>
        <div className='card-container'>
          <div
            className='card-front'
            style={{
              backgroundImage: `url(${this.props.image})`,
              zIndex: this.state.cardPosition
            }}
            onClick={this.changePosition}
          >
          </div>
          <div
            className='card-back'
            onClick={this.changePosition}
          >
            <h4>{this.props.name}</h4>
            <h5>{[this.props.id, this.props.air_date]}</h5>
            <button
              className='button'
              onClick={this.showInfo}
            >
             See more

                </button>
          </div>
          <div
            className='box-info'
            style={{
              top: this.state.infoPosition
            }}
          >

            <h6>STATUS  {this.props.status}</h6>
            <h6>SPECIES {this.props.specie} </h6>
            <h6>ABOUT<a href="">See more</a></h6>
            <h6>EPISODES <button
            onClick= {this.showInfo}
            >Play</button></h6>
          </div>
        </div>
      </div>
    )
  }
}

export default cards;
