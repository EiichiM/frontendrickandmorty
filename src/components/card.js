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
    if (this.state.infoPosition === '-100%') {
      this.setState({
        infoPosition: '0%',
        cardHeight: '300px'
      })
    } else {
      this.setState({
        infoPosition: '-100%',
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
            className='card-back d-flex justify-content-center align-items-center'
            onClick={this.changePosition}
          >
            <div class="d-flex align-items-center">
            <h5>{this.props.name}</h5>
            </div>
            <h6>{[this.props.id , this.props.air_date]}</h6>
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
              top: this.state.infoPosition,
              width: "200px",
            }}>
            <div class="d-flex justify-content-around">
              <div class="d-flex align-items-center">
                <h6>STATUS</h6>
              </div>
              <div class="d-flex align-items-center">
                <h6 className="prop">{this.props.status}</h6>
              </div>
            </div>
            <div class="d-flex justify-content-around">
              <div class="d-flex align-items-center">
                <h6>SPECIES </h6>
              </div>
              <div class="d-flex align-items-center">
                <h6 className="prop"> {this.props.specie} </h6>
              </div>
            </div>
            <div class="d-flex justify-content-around">
              <div class="d-flex align-items-center">
                <h6>ABOUT </h6>
              </div>
              <div class="d-flex align-items-center">
                <h6 className="prop"><a href="">See more</a></h6>
              </div>
            </div>
            <div class="d-flex justify-content-around">
              <div class="d-flex align-items-center">
                <h6>EPISODES </h6>
              </div>
              <div class="d-flex align-items-center">
                <h6><button
                  className="boton"
                  onClick=""
                >Play</button></h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default cards;
