import React, { Component } from 'react';
import request from 'superagent';
import SideBar from './SideBar.js';
import PokeList from './PokeList.js';
import Loading from './Loading.js';
import './search.css';

export default class SearchPage extends Component {
    state = {
        items: [],
        sortBy: 'pokemon',
        ascend: 'asc',
        search: '',
        searchInput: '',
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20&sort=${this.state.sortBy}&direction=${this.state.ascend}&pokemon=${this.state.search}`);

        this.setState({
            items: data.body.results,
            loading: false
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
        const filteredArray = this.state.items;

        return (
            <div className='search-body'>
                <SideBar setSort={this.setSort} setAscend={this.setAscend} setSearchInput={this.setSearchInput} setSearch={this.setSearch} resetSearch={this.resetSearch} currentSearch={this.state.search} />
                <div className='search-main'>
                    {this.state.loading ? <Loading /> : <PokeList filteredPokeArr={filteredArray} />
                    }
                </div>
            </div>
        )
    }
}