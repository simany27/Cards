import React, {Component} from 'react';
import {gamePage, welcomePage} from "../utils/Constants";
import Welcome from "./Welcome";
import Game from "./Game";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamer: ''
        }
    }

    changeGamer = gamer => {
        this.setState({gamer});
    }

    render() {
        if (this.props.page == welcomePage) {
            return (
                <div>
                    <Welcome changePage={this.props.changePage} gamer={this.changeGamer}/>
                </div>
            );
        }
        if (this.props.page == gamePage) {
            return (
                <div>
                    <Game changePage={this.props.changePage} gamer={this.state.gamer}/>
                </div>
            );
        }
    }
}

export default Main;