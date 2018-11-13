$(document).ready(function() {



    let draw = () => {
        let canvas = document.getElementById('circle1');
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d');
            let x = canvas.width / 2;
            let y = canvas.height / 2;
            let r = 50;
            ctx.beginPath();
            ctx.scale(1, 0.5);
            ctx.arc(x, y, r, 0, 2 * Math.PI, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#000000';
            ctx.stroke();
        };
    };

    draw();


});