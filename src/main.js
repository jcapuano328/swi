'use strict';

var React = require('react');
import { View } from 'react-native';
var Map = require('./map');

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
