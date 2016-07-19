'use strict'

var React = require('react');
import { View, Text } from 'react-native';
import Svg from 'react-native-svg';
var Hexagon = require('./hexagon');
var generator = require('./grid-generator');

var HexGrid = React.createClass({
    render() {
        //console.log(this.props.width + ', ' + this.props.height + ', ' + this.props.density);
        let hexes = generator(this.props.height, this.props.width, this.props.density);
        return (
            <Svg height={this.props.height} width={this.props.width}>
                {hexes.map((hex, i) => {
                    return (
                        <Hexagon key={i} hex={hex} />
                    );
                })}
            </Svg>
        );
    }
});

module.exports = HexGrid;
