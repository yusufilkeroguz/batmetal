import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import callTvMazeApi from "./library/TvMazeApi";

import './style/App.css';

import Main from './components/Main';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {apiData: []};
    }
    async componentWillMount() {
        let data = await callTvMazeApi();
        this.setState({apiData: data});
    }

    render() {
        return (
            <Router>
                <Main apiData={this.state.apiData} />
            </Router>
        );
    }
}

export default App;