import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import './list.css';

export default class PokeList extends Component {
    render() {
        return (
            <div classList='poke-list'>
                <PokeItem />
                <PokeItem />
                <PokeItem />
                <PokeItem />
            </div>
        )
    }
}
