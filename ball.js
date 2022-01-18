// class Ball {
//     constructor() {
//         this.canvas = document.createElement('Canvas');
//         this.ctx - this.canvas.getContext('2d');

//         document.body.appendChild(this.canvas);

//         window.addEventListener('resize', this.resize.bind(this), false);
//         this.resize()

//         window.requestAnimationFrame(this.animate.bind(this));
//     }
// }

// const canvas = document.createElement('Canvas');
// const ctx = this.canvas.getContext('2d');

// function drawBall(x, y, z) {
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, 2*Math.PI);
//     ctx.strokeStyle = "black";
//     ctx.stroke();
//     ctx.fillStyle = "red";
//     ctx.fill();
// }

// drawBall(500, 500, 50);

var button = document.getElementById('button');
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

button.addEventListener('click', function(event){
    ctx.fillStyle = Math.random() > 0.5 ? "red" : "blue";
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fill();
    
})
