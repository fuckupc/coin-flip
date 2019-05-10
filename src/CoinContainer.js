import React, { Component } from 'react';
import Coin from './Coin';
import './CoinContainer.css';

class CoinContainer extends Component {
    constructor() {
        super();
        this.state = {
            side: true,
            clickTime: 0,
            headTime: 1,
            tailTime: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        const cTime= this.state.clickTime +1;
        let hTime = this.state.headTime;
        let tTime = this.state.tailTime;
        if(this.state.side) {
            tTime++;
        } else {
            hTime++;
        }
        this.setState({
            side: !this.state.side,
            clickTime: cTime,
            headTime: hTime,
            tailTime: tTime
        })
    }

    render() {
        return (
            <div>
                <h1>Coin Flip</h1>
                <Coin side={this.state.side} />
                <button onClick={this.flipCoin}>Flip The Coin</button>
                <h4>{
                    `Now you have clicked: ${this.state.clickTime} times. 
                    The head has shown ${this.state.headTime} times,
                    the tail has shown ${this.state.tailTime} times.`
                }</h4>
            </div>
        );
    }
}

export default CoinContainer;