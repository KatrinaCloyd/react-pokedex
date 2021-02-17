import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './item.css';

export default class PokeItem extends Component {
    render() {
        return (
            <Link to={`search/${this.props.poke.pokemon}`} className='item-block'>
                <img className='poke-img' alt='pokemon' src={this.props.poke.url_image} />
                <div className='name'>Name: {this.props.poke.pokemon} </div>
                <div className='info'>Type: {this.props.poke.type_1}</div>
                <div className='info'>Ability: {this.props.poke.ability_1}</div>
                <div className='info'>Shape: {this.props.poke.shape}</div>
                <div className='info'>Attack Strength: {this.props.poke.attack}</div>
                <div className='info'>Defense Strength: {this.props.poke.defense}</div>
            </Link>
        )
    }
}