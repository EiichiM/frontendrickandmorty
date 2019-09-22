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
        if (this.state.episodios.length !== 0) {

            return this.state.episodios[0].map((episodios, index) => {
                // const created = () => {
                const date = episodios.air_date
                const hour = Date.parse(date)
                let total = hour / 1000 / 60 / 60 / 24 /30/12
                console.log(date)
                console.log(hour)
                console.log(total)
                // }
                return <Card
                    name={episodios.name}
                    created={episodios.created}
                    id={episodios.id}
                    image={this.state.episodios[1][index].image}
                    status={this.state.episodios[1][index].status}
                    specie={this.state.episodios[1][index].species}
                />
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
