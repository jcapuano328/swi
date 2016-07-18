'use strict'

var React = require('react');
import { G, Text, Image } from 'react-native-svg';
var Icons = require('./icons');

let percent = (v,p) => {
    return v * (p/100);
}

var Unit = React.createClass({
    render() {
        console.log('unit: ' + this.props.nation + '/' + this.props.leader + '/' + this.props.leadership + '/' + this.props.strength);
        let unit = Icons[this.props.nation];
        return (
            <G>
                <Image href={unit}
                    x={this.props.x+4}
                    y={this.props.y+5}
                    width={this.props.width*.65}
                    height={this.props.height*.65}
                />
                <Text
                    x={(this.props.width-this.props.x)/2-1}
                    y={this.props.y+this.props.height-24}
                    fontFamily="Sachiko"
                    fontSize="12"
                    textAnchor="middle"
                >{this.props.leader}</Text>
                <Text
                    x={(this.props.x+this.props.width)-11}
                    y={this.props.y+10}
                    fontFamily="Sachiko"
                    fontSize="8"
                    textAnchor="end"
                >{this.props.leadership.toString()}</Text>
                <Text
                    x={(this.props.x+this.props.width)-11}
                    y={this.props.y+20}
                    fontFamily="Sachiko"
                    fontSize="8"
                    textAnchor="end"
                >{this.props.strength.toString()}</Text>
            </G>
        )
    }
});

module.exports = Unit;
