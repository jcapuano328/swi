'use strict'

var React = require('react');
import { View, Image } from 'react-native';
var HexGrid = require('./hexgrid');
var Icons = require('./icons');

var Map = React.createClass({
    render() {
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
                }}>
                    <HexGrid />
                </Image>
            </View>
        );
    }
});

module.exports = Map;
