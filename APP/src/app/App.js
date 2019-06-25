import React from "react";
import Header from './core/components/Header';
import PropTypes from 'prop-types';

export class App extends React.Component {
    render() {
        console.log("App render")
        return (
            <div>
                <Header title="Click button to see the functionality"/>
                <hr />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
