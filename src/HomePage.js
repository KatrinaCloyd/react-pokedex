import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-body'>
                <h1>HOME PAGE: No fun</h1>
                <h4>Nothing to see here, you want to go to the search page. See link above in header.</h4>
                <div>
                    <img width='200' alt='pokemon' src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
                    <img width='200' alt='pokemon' src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" />
                    <img width='200' alt='pokemon' src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" />
                </div>
            </div>
        )
    }
}
