import React, { Component } from 'react'
import Card from './card'
import axios from 'axios'
import { getCharacter, getLocation, getEpisode } from 'rickmortyapi'
import { ESPIPE } from 'constants'

console.log(getCharacter(), getLocation(), getEpisode())
export class CContainer extends Component {

    state = {
        episodios: []
    }

    componentDidMount() {
        axios.get("https://backendrm.herokuapp.com/all")
            .then(res => {
                this.setState({
                    Card: res.data,
                    Cards: res.data
                })

            });
    }

    cards() {

        console.log(this.state.cardRender)
        return this.state.cardsToRender.map(card => {
            return <Card />
        })

    }

    renderEpisodios() {

        let episodes = axios.get("https://backendrm.herokuapp.com").then(res => {res.results});
        for (let i = 0; i < episodes.id.length; i++) {
            episodes(episodes.id[i])
        }

        return this.state.episodios.map(episiodio => {
            return <Card name={episiodio.name} air_date={episiodio.air_date} key={episiodio.id} />
        })
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
