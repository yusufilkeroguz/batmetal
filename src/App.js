import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import callTvMazeApi from "./library/TvMazeApi";

import './style/App.css';

import Main from './components/Main';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {apiData: [], isFetching: false};
    }
    async componentWillMount() {
        this.setState({isFetching: true});
        let data = await callTvMazeApi();
        this.setState({apiData: data});
    }

    render() {
        return (
            <Router>
                <Main apiData={this.state.apiData} fetching={this.state.isFetching}/>
            </Router>
        );
    }
}

export default App;