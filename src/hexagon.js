'use strict'

var React = require('react');
import { G, Polygon, Text } from 'react-native-svg';
var Nothing = require('./nothing');
var Unit = require('./unit');

var Hexagon = React.createClass({
    onPress() {
        console.log('*** Pressed ('+this.props.hex.row+','+this.props.hex.col+')');
    },
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
                   onPress={this.onPress}
               />
               {this.renderUnit()}
            </G>
        );

        /*
        {(this.props.hex.row == 4 && this.props.hex.col == 3)
            ? <Unit nation={'french'} leader={'Junot'} leadership={2} strength={11} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Text x={x} y={y} textAnchor="middle">{this.props.hex.row+','+this.props.hex.col}</Text>
        }
        */
        /*
        {(this.props.hex.row == 4 && this.props.hex.col == 3)
            ? <Unit nation={'french'} leader={'Junot'} leadership={2} strength={11} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Text
                 x={(this.props.hex.width-this.props.hex.x)/2-1}
                 y={(this.props.hex.y+this.props.hex.height)/2-2}
               >{this.props.hex.row+','+this.props.hex.col}</Text>
        }
        */
        /*
        let x = this.props.hex.x+(this.props.hex.width/2)-1;
        let y = this.props.hex.y+(this.props.hex.height/2)-2;
        <Text x={x} y={y} textAnchor="middle">{this.props.hex.row+','+this.props.hex.col}</Text>
        */
    },
    renderUnit() {
        let unit = null;
        if (this.props.hex.row == 13 && this.props.hex.col == 8) {
            unit = {
                nation: 'spain',
                color: '#eee8aa',
                leader: 'Blake',
                leadership: 0,
                strength: 5
            };
        } else if (this.props.hex.row == 9 && this.props.hex.col == 7) {
            unit = {
                nation: 'france-spain',
                color: '#268BFF',
                leader: 'Joseph',
                leadership: 1,
                strength: 15
            };
        } else if (this.props.hex.row == 7 && this.props.hex.col == 3) {
            unit = {
                nation: 'france',
                color: '#268BFF',
                leader: 'Junot',
                leadership: 2,
                strength: 21
            };
        } else if (this.props.hex.row == 9 && this.props.hex.col == 5) {
            unit = {
                nation: 'britain',
                color: '#ff0000',
                leader: 'Wellesly',
                leadership: 3,
                strength: 9
            };
        } else if (this.props.hex.row == 11 && this.props.hex.col == 3) {
            unit = {
                nation: 'portugal',
                color: '#c0c0c0',
                leader: 'John',
                leadership: 1,
                strength: 15
            };
        }

        if (unit) {
            return (
                <Unit
                    nation={unit.nation}
                    color={unit.color}
                    leader={unit.leader}
                    leadership={unit.leadership}
                    strength={unit.strength}
                    x={this.props.hex.x}
                    y={this.props.hex.y}
                    width={this.props.hex.width}
                    height={this.props.hex.height}
                />
            );
        }
        return <Nothing />;
        /*
        {(this.props.hex.row == 13 && this.props.hex.col == 8)
            ? <Unit nation={'spain'} color={'#eee8aa'} leader={'Blake'} leadership={0} strength={5} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Nothing/>
        }

        {(this.props.hex.row == 9 && this.props.hex.col == 7)
            ? <Unit nation={'france-spain'} color={'#268BFF'} leader={'Joseph'} leadership={1} strength={15} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Nothing/>
        }

        {(this.props.hex.row == 7 && this.props.hex.col == 3)
            ? <Unit nation={'france'} color={'#268BFF'} leader={'Junot'} leadership={2} strength={21} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Nothing/>
        }

        {(this.props.hex.row == 9 && this.props.hex.col == 5)
            ? <Unit nation={'britain'} color={'#ff0000'} leader={'Wellesly'} leadership={1} strength={15} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Nothing/>
        }

        {(this.props.hex.row == 11 && this.props.hex.col == 3)
            ? <Unit nation={'portugal'} color={'#c0c0c0'} leader={'John'} leadership={1} strength={15} x={this.props.hex.x} y={this.props.hex.y} width={this.props.hex.width} height={this.props.hex.height} />
            : <Nothing/>
        }
        */
    }
});

module.exports = Hexagon;
