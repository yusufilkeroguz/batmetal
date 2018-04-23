import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import RouteWithParams from "./RouteWithParams";
/**
 * Routes
 */
import Homepage from './Homepage';
import Detail from './Detail';
import NotFound from './NotFound';

export default class Container extends Component {
    render() {
        return (
            <Switch>
                <RouteWithParams exact path="/" component={Homepage} apiData={this.props.apiData} />
                <RouteWithParams path="/detail/:id" component={Detail} apiData={this.props.apiData} />
                <Route component={NotFound}/>
            </Switch>
        );
    }
}