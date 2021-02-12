import React, { Component } from 'react';
import SideBar from './SideBar.js';
import PokeList from './PokeList.js';
import './search.css';
import pokeArray from './data.js';

export default class SearchPage extends Component {
    state = {
        sortBy: 'pokemon',
        ascend: 'true',
        search: ''
    }

    setSort = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }


    render() {
        const sortArray = (arr) => {
            if (this.state.sortBy === "attack" || this.state.sortBy === "defense") {
                arr.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy])
                return arr;
            } else
                arr.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
            return arr;
        }

        const filteredPokeArr = sortArray(pokeArray);

        return (
            <div className='search-body'>
                <SideBar setSort={this.setSort} />
                <div className='search-main'>
                    <PokeList filteredPokeArr={filteredPokeArr} />
                </div>
            </div>
        )
    }
}