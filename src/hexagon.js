'use strict'

var React = require('react');
import { G, Polygon, Text } from 'react-native-svg';
var Unit = require('./unit');

var Hexagon = React.createClass({
    render() {
        let pts = this.props.hex.points.map((pt) => {
            return pt.x.toString() + ',' + pt.y.toString();
        }).join(' ');
        //console.log(pts);
        let x = this.props.hex.x+(this.props.hex.width/2)-1;
        let y = this.props.hex.y+(this.props.hex.height/2)-2;
        return (
            <G>
                <Polygon
                   points={pts}
                   fillOpacity="0"
                   stroke="gray"
                   strokeWidth="1"
               />
               <Text
                    x={x}
                    y={y}
                    textAnchor="middle"
                  >{this.props.hex.row+','+this.props.hex.col}</Text>
            </G>
        );
        /*
        {(this.props.hex.row == 4 && this.props.hex.col == 3)
            ? <Unit nation={'french'} leader={'Junot'} leadership={2} strength={11} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Text
                 x={(this.props.hex.width-this.props.hex.x)/2-1}
                 y={(this.props.hex.y+this.props.hex.height)/2-2}
               >{this.props.hex.row+','+this.props.hex.col}</Text>
        }

        */
    }
});

module.exports = Hexagon;
