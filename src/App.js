import './App.css';
import React, {Component} from 'react';
import Main from "./components/Main";
import {gamePage, welcomePage} from "./utils/Constants";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: welcomePage,
        }
    }

    changeActivePage = page => {
        this.setState({activePage: page})
    }

  render() {
    return (
        <div>
            <Main changePage={this.changeActivePage} page={this.state.activePage}/>
        </div>
    );
  }
}

export default App;
