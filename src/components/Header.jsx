import React, { Component } from 'react';
import '../css-components/Header.css'
class Header extends Component {
    render() {
        return (
            <div className="container">
                <div>Logo</div>
                <div>
                    <a href="www.google.com">Home</a>
                    <a href="www.google.com">About</a>
                    <a href="www.google.com">Pricing</a>
                </div>
            </div>
        );
    }
}

export default Header;