import React, {Component} from 'react';
import {cardsConst, welcomePage} from "../utils/Constants";

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterComputer: 0,
            counterGamer: 0,
            isLoading: true,
            isFinish: false
        }
        this.cards = Array.from(cardsConst);
    }

    componentDidMount() {
        this.cards.sort(() => Math.random() - 0.5);
        this.setState({isLoading: false});
    }

    nextChapter = () => {
        let a = Number(this.cards[0].split(' ')[0]);
        let b = Number(this.cards[1].split(' ')[0]);
        if(a > b){
            this.setState({counterComputer: this.state.counterComputer + 1})
        } else if(a < b){
            this.setState({counterGamer: this.state.counterGamer + 1})
        }
        this.cards.splice(0, 2);
        if (this.cards.length == 0) {
            this.setState({isFinish: true})
        }
    }

    handleNewGame = () => {
        this.props.changePage(welcomePage);
        this.cards.fill();
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className='spinner-border'></div>
            )
        } else {
            if (this.state.isFinish) {
                return(<div className='result'>
                    {this.state.counterComputer > this.state.counterGamer ? <h1>LOSE</h1> : <h1>WIN</h1>}
                    <h1>Computer {this.state.counterComputer} : {this.state.counterGamer} {this.props.gamer}</h1>
                        <button onClick={this.handleNewGame}>Again?</button>
                    </div>
                )
            } else {
                return (
                    <div className='game'>
                        <h1>Computer</h1>
                        <div className='card'>{this.cards[0]}</div>
                        <div className='card'>{this.cards[1]}</div>
                        <div>
                            <button onClick={this.nextChapter}>Next</button>
                            <span className='h1'>{this.props.gamer}</span>
                        </div>
                    </div>
                );
            }
        }
    }
}

export default Game;