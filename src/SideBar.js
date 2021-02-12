import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div className='search-side'>
                <p>Sort Results by:</p>
                <select onChange={this.props.setSort}>
                    <option value="pokemon">Pokemon Name</option>
                    <option value="type_1">Type</option>
                    <option value="attack">Attack Strength</option>
                    <option value="defense">Defence Strength</option>
                </select >
                <p>Sort Direction:</p>
                <select onChange={this.props.setAscend}>
                    <option value="true">Ascending</option>
                    <option value="false">Descending</option>
                </select>
                <p>Enter Search:</p>
                <input />
                <button>Search</button>
            </div>
        )
    }
}
