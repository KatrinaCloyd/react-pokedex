import React, { Component } from 'react';
import request from 'superagent';
import Loading from './Loading.js';
import './detail.css';

export default class DetailPage extends Component {
    state = {
        selectedItem: {},
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        await this.setState({
            selectedItem: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
            loading: false
        });
    }

    render() {
        return (
            <div className='detail-body'>
                <h3>DETAIL PAGE:</h3>

                <div>
                    {this.state.loading ? <Loading /> :
                        <div className='detail-block' style={{ backgroundColor: this.state.selectedItem.color_1, }}>
                            <div className='detail-name'>Name: {this.state.selectedItem.pokemon} </div>
                            <img className='detail-img' alt='pokemon' src={this.state.selectedItem.url_image} />
                            <div>Type: {this.state.selectedItem.type_1}</div>
                            <div>Shape: {this.state.selectedItem.shape === 'NA' ? 'Unspecified' : this.state.selectedItem.shape}</div>
                            <div>Ability: {this.state.selectedItem.ability_1}</div>
                            <div>Attack Strength: {this.state.selectedItem.attack}</div>
                            <div>Defense Strength: {this.state.selectedItem.defense}</div>
                            <div>Hidden Ability: {this.state.selectedItem.ability_hidden === 'NA' ? 'None' : this.state.selectedItem.ability_hidden}</div>
                            <div>Egg Group: {this.state.selectedItem.egg_group_1}</div>
                            <div>Speed: {this.state.selectedItem.speed} mph</div>
                        </div>}
                </div>
            </div >
        )
    }
}
