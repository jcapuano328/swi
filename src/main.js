'use strict';

var React = require('react');
import { View } from 'react-native';
//var Map = require('./map');
//var Map = require('./maps/spain');
var Map = require('./maps/portugal');

var MainView = React.createClass({
    render() {
        return (
            <View style={{flex: 1,backgroundColor: 'rgba(0,0,0,0.01)'}}>
                <Map />
            </View>
        );
    }
});

module.exports = MainView;
