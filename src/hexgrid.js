'use strict'

var React = require('react');
import { View, Dimensions } from 'react-native';
var Hexagon = require('./hexagon');

var HexGrid = React.createClass({
    render() {
        var {width, height} = Dimensions.get('window');
        var cols =

        return (
            //Icons.splash
            <View style={{
                flex: 1,
                //marginTop: 30,
                //backgroundColor: 'rgba(0,0,0,0.01)',
            }}>
                <Image source={Icons['map']} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    backgroundColor: 'transparent',
                    resizeMode: 'stretch'
                }} />
            </View>
        );
    }
});

module.exports = HexGrid;
