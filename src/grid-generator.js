'use strict'
// generate a list of hexes
// 1. size a hex
// 2. create rows of hexes
/* hex {
        row: int
        col: int
        size: int
   }
*/

let factor = Math.sqrt(3);
let startAngle = 30; // 0 = flat topped, 30 = pointy topped

let hexCorner = (center, size, i) => {
    let angle_deg = 60 * i + startAngle;
    let angle_rad = Math.PI / 180 * angle_deg;
    let x = center.x + size * Math.cos(angle_rad);
    let y = center.y + size * Math.sin(angle_rad);
    //console.log('center = (' + center.x + ',' + center.y + '), size = ' + size + ', angle deg = ' + angle_deg + ', angle rad = ' + angle_rad + ', x = ' + x + ', y = ' + y);
    //console.log('angle deg = ' + angle_deg + ' = (' + x + ',' + y + ')');
    return {
        x: x,
        y: y
    };
}
let hexPoints = (center, size) => {
    let points = [];
    for (let i = 0; i < 6; i++) {
        points.push(hexCorner(center,size,i));
    }
    return points;
}


module.exports = (height, width, side) => {
    let hexes = [];
    let hexheight = side * 2;
    let hexwidth = Math.ceil(side * factor);
    let hexcenter = {x: hexwidth/2, y: hexheight/2};
    let deltay = hexheight * 0.75;
    let deltax = hexwidth;
    //let area = height * width;
    //let hexarea = (1.5*factor) * (side*side);
    //let numhexes = Math.floor(area / hexarea);
    let rows = Math.floor(height / side);
    let cols = Math.floor(width / hexwidth);
    console.log(rows+'x'+cols);
    for (let row = 0; row < rows; row++) {
        let y = row * deltay;
        let xstart = (row % 2) ? (hexwidth / 2) : 0;
        for (let col = 0; col < cols; col++) {
            let x = xstart + (col * deltax);
            hexes.push({
                col: col,
                row: row,
                x: x,
                y: y,
                width: hexwidth,
                height: hexheight,
                points: hexPoints({x:hexcenter.x + x, y: hexcenter.y + y}, side)
            });
        }
    }
    return hexes;
}

/*
module.exports = (height, width, density) => {
    let r = [];
    let rows = Math.floor(height / (density*2));
    let cols = Math.floor(width / density);
    for (let row = 0; row < rows; row++) {
        let c = [];
        for (let col = 0; col < cols; col++) {
            c.push({
                row: row,
                col: col,
                size: density
            });
        }
        r.push({row: row, cols: c});
    }
    return r;
}
*/
/*
module.exports = (height, width) => {
    let hexas = [];
    for (let r = 0; r < height; r++) {
        let offset = Math.floor(r/2); // or r>>1
        for (let q = -offset; q < width - offset; q++) {
            hexas.push({q: q, r: r, s: -q-r});
        }
    }
    return hexas;
}
*/
