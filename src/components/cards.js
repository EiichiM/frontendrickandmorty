import React, { Component } from 'react'
import Card from './card'
import axios from 'axios'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import { ESPIPE } from 'constants'

export class CContainer extends Component {

    state = {
        episodios: []
    }

    componentDidMount() {
        axios.get("https://backendrm.herokuapp.com/all")
            .then(res => {
                // console.log(res.data)
                this.setState({
                   episodios: res.data
                })

            });
    }

    cards() {

        console.log(this.state.card)
        return this.state.episodios.map(card => {
            return <Card />
        })

    }

    renderEpisodios() {

        console.log(this.state.episodios)
        if(this.state.episodios.length !== 0){
            
            return this.state.episodios[0].map(episiodio => {
                return <Card name={episiodio.name} air_date={episiodio.air_date} key={episiodio.id} />
            })
        }

    }



    render() {
        return (

            <div className='container'>
                <div className='cards container'>
                    <div className="row justify-content-between">
                        {this.renderEpisodios()}
                    </div>

                </div>

            </div>
            // </div>
        )
    }
}

export default CContainer
