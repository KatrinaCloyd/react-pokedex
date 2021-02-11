import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './header.css';

export default withRouter(class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='headLeft'>
                    Pokedex Sorting Page
                </div>
                <div className='headRight'>
                    <NavLink exact activeClassName="selected" to="/" className='link'>
                        Home </NavLink>

                    <NavLink exact activeClassName="selected" to="/search" className='link'>
                        Search </NavLink>

                </div>
            </div>
        )
    }
})
