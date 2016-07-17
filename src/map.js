'use strict'

var React = require('react');
import { View, Image, Dimensions } from 'react-native';
var HexGrid = require('./hexgrid');
var Icons = require('./icons');

var Map = React.createClass({
    render() {
        var {width, height} = Dimensions.get('window');
        return (
            <View style={{
                flex: 1,
                //marginTop: 30,
                //backgroundColor: 'rgba(0,0,0,0.01)',
            }}>
                <Image source={Icons['map']} resizeMode={'stretch'} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    backgroundColor: 'transparent'
                }}>
                    <HexGrid width={width} height={height} density={26}/>
                </Image>
            </View>
        );
    }
});

module.exports = Map;
