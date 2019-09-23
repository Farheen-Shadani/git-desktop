import React, { Component } from 'react';
import '../components/SignIn.css'


class Header extends Component {
    render() {
        return (
            <div className="loginBtns">

                <button> Sign In </button>

                <button> Sign Up </button>

            </div>
        );
    }
}

export default Header; 