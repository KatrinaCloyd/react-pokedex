import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div className='search-side'>
                <p>Sort Results by:</p>
                <select onChange={this.props.setSort}>
                    <option value="pokemon">Pokemon Name</option>
                    <option value="type_1">Type</option>
                    <option value="ability_1">Ability</option>
                    <option value="shape">Shape</option>
                    <option value="attack">Attack Strength</option>
                    <option value="defense">Defence Strength</option>
                </select >
                <p>Sort Direction:</p>
                <select onChange={this.props.setAscend}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <div className='search' value={this.props.currentSearch}><p>Search Names:</p>
                    <form>
                        <input onChange={this.props.setSearchInput} />
                        <button onClick={this.props.setSearch}>Search</button>
                        <button onClick={this.props.resetSearch}>Reset</button>
                    </form>
                </div>
                <div className='search'>
                    <p>Current Page: {this.props.currentPage}</p>
                    <button onClick={this.props.decreasePage} disabled={this.props.currentPage === 1}>Last Page</button>
                    <button onClick={this.props.increasePage} disabled={this.props.numOfPages === this.props.currentPage}>Next Page</button>
                </div>
            </div>
        )
    }
}