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
    console.log('perro')
    if (this.state.infoPosition === '-300%') {
      this.setState({
        infoPosition: '0%',
        cardHeight: '500px'
      })
    } else {
      this.setState({
        infoPosition: '-300%',
        cardHeight: '200px'
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
              backgroundImage: this.res.data.id.image,
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

            <h4>STATUS  {this.props.id.air_date}</h4>
            <h4>SPECIES{this.props}</h4>
            <h4>ABOUT<a href="">See more</a></h4>
            <h4>EPISODES <button>Play</button></h4>
          </div>
        </div>
      </div>
    )
  }
}

export default cards;
