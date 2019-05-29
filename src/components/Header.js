import React from 'react'
import json from './json'
import ReactHtmlParser from 'react-html-parser';
import {useEffect, useState} from 'react'

const Header = (props) => {
    const [state, setState] = useState([]);
    const html = ReactHtmlParser(json);

    useEffect(() => {
        const id = [];
        if (state.length === 0) {
            for (let key in html) {
                if (html[key].props && html[key].props.id) {
                    id.push(html[key].props.id)
                }
            }
            setState(() => (id))
        }
    });

    useEffect(() => {
        if (props.location.hash.includes('#')) {
            const node = document.getElementById(props.location.hash.slice(1))
            window.scrollTo(node.offsetLeft, node.offsetTop - 50)
        }
    });
    return (
        <div className='header'>
            <div className="w3-bar w3-black fixed-bar">
                <a href={`#${state[0]}`} className="w3-bar-item w3-button w3-mobile">Portrait</a>
                <a href={`#${state[1]}`} className="w3-bar-item w3-button w3-mobile">Marketing</a>
                <a href={`#${state[2]}`} className="w3-bar-item w3-button w3-mobile">Analytics</a>
            </div>
            {html}
        </div>
    )
};

export default Header