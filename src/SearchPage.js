import React, { Component } from 'react';
import request from 'superagent';
import SideBar from './SideBar.js';
import PokeList from './PokeList.js';
import './search.css';

export default class SearchPage extends Component {
    state = {
        items: [],
        sortBy: 'pokemon',
        ascend: 'asc',
        search: '',
        searchInput: ''
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=50&sort=${this.state.sortBy}&direction=${this.state.ascend}&pokemon=${this.state.search}`);

        this.setState({
            items: data.body.results,
        });
    }

    setSort = async (e) => {
        await this.setState({
            sortBy: e.target.value
        })
        await this.fetchPokemon()
    }

    setAscend = async (e) => {
        await this.setState({
            ascend: e.target.value
        })
        await this.fetchPokemon()
    }

    setSearchInput = (e) => {
        this.setState({
            searchInput: e.target.value.toLowerCase(),
        });
    }

    setSearch = async (e) => {
        await this.setState({
            search: this.state.searchInput,
        });
        e.preventDefault();
        await this.fetchPokemon()
    }

    resetSearch = async (e) => {
        await this.setState({
            search: '',
            searchInput: ''
        });
        e.preventDefault();
        await this.fetchPokemon()
    }

    render() {
        // const sortArray = (arr) => {
        //     if (this.state.ascend === 'asc') {
        //         if (this.state.sortBy === "attack" || this.state.sortBy === "defense") {
        //             arr.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy])
        //             return arr;
        //         } else
        //             arr.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
        //         return arr;
        //     }
        //     else
        //         if (this.state.sortBy === "attack" || this.state.sortBy === "defense") {
        //             arr.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy])
        //             return arr;
        //         } else
        //             arr.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
        //     return arr;
        // }

        // const filterArray = (arr) => {
        //     if (this.state.search) {
        //         let newArr = arr.filter(poke => poke.pokebase.includes(this.state.search))
        //         return newArr;
        //     } else
        //         return arr;
        // }

        // const sortedPokeArr = sortArray(this.state.items);
        const filteredArray = this.state.items;

        return (
            <div className='search-body'>
                <SideBar setSort={this.setSort} setAscend={this.setAscend} setSearchInput={this.setSearchInput} setSearch={this.setSearch} resetSearch={this.resetSearch} currentSearch={this.state.search} />
                <div className='search-main'>
                    <PokeList filteredPokeArr={filteredArray} />
                </div>
            </div>
        )
    }
}