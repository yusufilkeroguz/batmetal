import React, {Component} from "react";
import logo from './../image/logo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="text-center">
                <Link to="/">
                    <img className="logo" src={logo} alt={process.env.REACT_APP_NAME} width="450" height="191"/>
                </Link>
            </header>
        );
    }
}