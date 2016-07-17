'use strict'

var React = require('react');
import { Polygon } from 'react-native-svg';

var Hexagon = React.createClass({
    render() {
        let pts = this.props.hex.points.map((pt) => {
            return pt.x.toString() + ',' + pt.y.toString();
        }).join(' ');
        //console.log(pts);
        return (
            <Polygon
               points={pts}
               fillOpacity="0"
               stroke="gray"
               strokeWidth="1"
           />
        );
    }
});

module.exports = Hexagon;
