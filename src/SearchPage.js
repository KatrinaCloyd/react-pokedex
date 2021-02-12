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

    setAscend = (e) => {
        this.setState({
            ascend: e.target.value
        })
    }

    setSearch = (e) => {
        this.setState({
            search: e.target.value,
        });
    }


    render() {
        const sortArray = (arr) => {
            if (this.state.ascend === 'true') {
                if (this.state.sortBy === "attack" || this.state.sortBy === "defense") {
                    arr.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy])
                    return arr;
                } else
                    arr.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
                return arr;
            }
            else
                if (this.state.sortBy === "attack" || this.state.sortBy === "defense") {
                    arr.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy])
                    return arr;
                } else
                    arr.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
            return arr;
        }

        const filterArray = (arr) => {
            if (this.state.search) {
                let newArr = arr.filter(poke => poke.pokebase.includes(this.state.search))
                return newArr;
            } else
                return arr;
        }

        const sortedPokeArr = sortArray(pokeArray);
        const filteredArray = filterArray(sortedPokeArr);
        console.log(filteredArray);

        return (
            <div className='search-body'>
                <SideBar setSort={this.setSort} setAscend={this.setAscend} setSearch={this.setSearch} />
                <div className='search-main'>
                    <PokeList filteredPokeArr={filteredArray} />
                </div>
            </div>
        )
    }
}