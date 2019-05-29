import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './wrapper/GridWrapper'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Router><Wrapper/></Router>, document.getElementById('root'));
