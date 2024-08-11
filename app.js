import Point from "./point.js"

let canvas = document.getElementById('canvas');
if (canvas != null ) console.log("canvas find true")

let ctx = canvas.getContext("2d");

let point = new Point(ctx);


point.draw();

function animate(){
    requestAnimationFrame(animate)
point.setXY(Math.random() * 300, Math.random() * 150);
point.setColorFill(get_random_color());
point.draw()
}

function get_random_color() {
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    return "#"+c()+c()+c();
  }


animate()