import React, { Component } from 'react'
import '../assets/cards.css'
import "./cards"
import onClickOutside from "react-onclickoutside";
class MyComponent extends Component {
  handleClickOutside() {
    console.log('prueba 2')
    if (this.state.infoPosition === '-100%') {
      this.setState({
        infoPosition: '0%',
        cardHeight: '400px'
      })
    } else {
      this.setState({
        infoPosition: '-100%',
        cardHeight: '150px'
      })
    }
    
  }
}

const outside = onClickOutside(MyComponent);

export class cards extends Component {
 
  state = {
    cardPosition: 3,
    infoPosition: '-100%',
    cardHeight: '150px'
  }

  changePosition = () => {
    console.log(this.state.cardPosition)
    if (this.state.cardPosition === 3) {
      this.setState({ cardPosition: 2 })
    } else {
      this.setState({ cardPosition: 3 })
    }
  }

  showInfo = () => {
    console.log('prueba')
    if (this.state.infoPosition === '-100%') {
      this.setState({
        infoPosition: '0%',
        cardHeight: '400px'
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
      <div className='card mt-3' style={{ height: this.state.cardHeight, width: "250px" }}>
        <div className='card-container'>
          <div
            className='card-front'
            style={{
              backgroundImage: `url(${this.props.image})`,
              zIndex: this.state.cardPosition}}
            onClick={this.changePosition}
          >
          </div>
          <div
            className='card-back d-flex justify-content-center align-items-center'
            onClick={this.changePosition}
          >
            <div className="d-flex align-items-center">
              <h5>{this.props.name}</h5>
            </div>
            <div className="fechaid d-flex justify-content-between">
              <div className="d-flex">
                <h6>ID: {this.props.id} </h6>
              </div>
              <div className="d-flex">
                <h6> {this.props.air_date}</h6>
              </div>
            </div>
            <button
              className='boton'
              onClick={this.showInfo} 
              >
                
            See more
                
                </button>
          </div>
         
          <div
            className='box-info'
            style={{
              top: this.state.infoPosition,
              width: "250px",
              height: "400px",
            }}
            >
            <div className="box-info-papa">
              <div className="box-info-hijoO">
                <h6>STATUS</h6>
              </div>
              <div className="box-info-hijo">
                <h6 className="prop">{this.props.status}</h6>
              </div>
            </div>
            <div className="box-info-papa">
              <div className="box-info-hijoO">
                <h6>SPECIES </h6>
              </div>
              <div className="box-info-hijo">
                <h6 className="prop"> {this.props.specie} </h6>
              </div>
            </div>
            <div className="box-info-papa">
              <div className="box-info-hijoO">
                <h6>ABOUT </h6>
              </div>
              <div className="box-info-hijo">
                <h6 className="prop"><a className="a"href="https://www.rickandmorty.com/">See more</a></h6>
              </div>
            </div>
            <div className="box-info-papa">
              <div className="box-info-hijoO">
                <h6>EPISODES </h6>
              </div>
              <div className="box-info-hijo">
                <h6>
                  <form action="https://www.rickandmorty.com/">
                  <button
                  className="button" type="submit">
                    <span> 
                    <b>
                    Play
                    </b>
                    </span>
                </button>
                </form>
                </h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default cards;
