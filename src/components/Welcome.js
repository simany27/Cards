import React, {Component, Fragment} from 'react';
import {gamePage} from "../utils/Constants";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.gamerName = React.createRef();
    }

    handleButtonClick = () => {
        const gamer = this.gamerName.current.value;
        this.props.gamer(gamer);
        this.props.changePage(gamePage);
    }

    render() {
        return (
            <div className='start'>
                <h1>Ready for WAR</h1>
                <input ref={this.gamerName} type='text' placeholder={'Enter your name'}/>
                <button onClick={this.handleButtonClick}>Start</button>
            </div>
        );
    }
}

export default Welcome;
