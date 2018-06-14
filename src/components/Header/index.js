import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

class Header extends Component {
    render () {
        return (
            <header className="header">
                this header
                <ul className="navList">
                    <li><Link to="/toDo">To do list</Link></li>
                    <li><Link to="/">Blog list</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header
