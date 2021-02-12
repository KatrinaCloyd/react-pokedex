import React, { Component } from 'react';
import SideBar from './SideBar.js';
import PokeList from './PokeList.js';
import './search.css';
import pokeArray from './data.js';

export default class SearchPage extends Component {
    state = {
        name: '',
        type: '',
        attack: '',
        defense: '',
        ascend: 'true',
        search: ''
    }

    render() {
        const filteredPokeArr = pokeArray;
        return (
            <div className='search-body'>
                <SideBar />
                <div className='search-main'>
                    <PokeList filteredPokeArr={filteredPokeArr} />
                </div>
            </div>
        )
    }
}