import React, { Component } from 'react';
import SideBar from './SideBar.js';
import PokeList from './PokeList.js';
import './search.css';
import pokeArray from './data.js';

export default class SearchPage extends Component {
    render() {
        return (
            <div className='search-body'>
                <SideBar />
                <div className='search-main'>
                    <PokeList />

                </div>
            </div>
        )
    }
}