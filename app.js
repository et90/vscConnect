import Point from "./point.js"

let canvas = document.getElementById('canvas');
if (canvas != null ) console.log("canvas find true")

let ctx = canvas.getContext("2d");

let point = new Point(ctx);


point.draw();