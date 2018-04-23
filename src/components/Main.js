import React, {Component} from 'react';

/**
 * Custom Components
 */
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container apiData={this.props.apiData}/>
                <Footer />
            </div>
        );
    }
}