import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import './list.css';

export default class PokeList extends Component {
    render() {
        const pokeNodes = this.props.filteredPokeArr.map(poke =>
            <PokeItem
                key={poke.id}
                poke={poke} />
        );
        return (
            <div className='poke-list'>
                {pokeNodes}
            </div>
        )
    }
}
