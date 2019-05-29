import React, {Component} from 'react';
import {Route} from 'react-router'
import GridWrapper from './wrapper/GridWrapper'

class App extends Component {
    render() {
        return (
            <div>
                <Route path='/' component={GridWrapper}/>
            </div>
        );
    }
}

export default App;
