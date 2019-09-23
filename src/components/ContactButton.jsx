import React from 'react';
import './ContactButton.css';
import PropTypes from 'prop-types';


function ContactButton(props) {
    return (

        <button><a href={props.hrefURL}>{props.anchorText}</a></button>

    );
}

ContactButton.propTypes = {
    hrefURL: PropTypes.string,
    anchorText: PropTypes.string
}

export default ContactButton;