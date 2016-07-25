'use strict'

var React = require('react');
import { View, Image, Dimensions } from 'react-native';
var HexGrid = require('./hexgrid');
var Icons = require('./icons');

var Map = React.createClass({
    render() {
        var {height, width } = Dimensions.get('window');
        //console.log('height = ' + height + ', width = ' + width);
        return (
            <View style={{
                flex: 1,
                //marginTop: 30,
                //backgroundColor: 'rgba(0,0,0,0.01)',
            }}>
                <Image source={Icons['map']} resizeMode={'stretch'}
                    style={{
                    flex: 1,
                    width: null,
                    height: null,
                    backgroundColor: 'transparent'
                }}>
                    <HexGrid width={width} height={height} density={26}/>
                </Image>

            </View>
        );
        /*
        <Image source={Icons['map']} resizeMode={'stretch'} style={{
            flex: 1,
            width: null,
            height: null,
            backgroundColor: 'transparent'
        }}>
            <HexGrid width={width} height={height} density={26}/>
        </Image>
        */

    }
});

module.exports = Map;
