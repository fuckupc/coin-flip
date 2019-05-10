import React, { Component } from 'react';
import './Coin.css';
import head from './top.jpg';
import tail from './bottom.jpg';

class Coin extends Component {
    render() {
        let imageSrc=this.props.side ? head : tail;
        return (
            <img src={imageSrc} alt="" />
        );
    }
}

export default Coin;