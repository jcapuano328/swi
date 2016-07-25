'use strict'

var React = require('react');
import { G, Text, Image, Rect } from 'react-native-svg';
var Icons = require('./icons');

let percent = (v,p) => {
    return v * (p/100);
}

var Unit = React.createClass({
    onPress() {
        console.log('Press: ' + this.props.nation + '/' + this.props.leader + '/' + this.props.leadership + '/' + this.props.strength);
    },
    render() {
        //console.log('unit: ' + this.props.nation + '/' + this.props.leader + '/' + this.props.leadership + '/' + this.props.strength);
        let flag = Icons[this.props.nation];
        //console.log('*** unitpos');
        let unitpos = {
            x: this.props.x+8,
            y: this.props.y+8,
            width: this.props.width*.65,
            height: this.props.height*.65
        };
        //console.log(unitpos);

        //console.log('*** flagpos');
        let flagpos = {
            x: (unitpos.x/2)+2,
            y: (unitpos.y/2)+2,
            width: unitpos.width*.35,
            height: unitpos.height*.30
        };
        //console.log(flagpos);

        //console.log('*** leaderpos');
        let leaderpos = {
            x: this.props.x+(this.props.width/2)-1,
            y: this.props.y+this.props.height-24
        };
        //console.log(leaderpos);

        //console.log('*** leadershippos');
        let leadershippos = {
            x: (this.props.x+this.props.width)-11,
            y: this.props.y+10
        };
        //console.log(leadershippos);

        //console.log('*** strengthpos');
        let strengthpos = {
            x: (this.props.x+this.props.width)-11,
            y: this.props.y+20
        };
        //console.log(strengthpos);
        return (
            <G>
                <Rect
                    x={unitpos.x}
                    y={unitpos.y}
                    width={unitpos.width}
                    height={unitpos.height}
                    fill={this.props.color}
                    onPress={this.onPress}
                />
                <Image href={flag}
                    x={flagpos.x}
                    y={flagpos.y}
                    width={flagpos.width}
                    height={flagpos.height}
                />
                <Text
                    x={leaderpos.x}
                    y={leaderpos.y}
                    fontFamily="Sachiko"
                    fontSize="10"
                    textAnchor="middle"
                >{this.props.leader}</Text>
                <Text
                    x={leadershippos.x}
                    y={leadershippos.y}
                    fontFamily="Sachiko"
                    fontSize="8"
                    textAnchor="end"
                >{this.props.leadership.toString()}</Text>
                <Text
                    x={strengthpos.x}
                    y={strengthpos.y}
                    fontFamily="Sachiko"
                    fontSize="8"
                    textAnchor="end"
                >{this.props.strength.toString()}</Text>
            </G>
        );
    }
});

module.exports = Unit;
