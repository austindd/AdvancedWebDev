$(document).ready(function () {

    // ==================== SEMI-GLOBAL VARIABLES ====================

    let shape_index = 0;
    let shape_left = 0;
    let shape_top = 0;




    // ========================== CLASSES ==========================

    class Shape {
        constructor(type, name, left, top, height = null, width = null, radius = null, color = '#ffffff', ) {
            this.type = type;
            this.name = name;
            this.left = left;
            this.top = top;
            this.height = height;
            this.width = width;
            this.radius = radius;
            this.color = color;
            this.element = $(`<canvas id='${this.name}'></canvas>`);
            this.element.css({
                'display': `inline-block`,
                'top': `${this.top}px`,
                'left': `${this.left}px`,
                'height': `${this.height}`,
                'width': `${this.width}`,
                'border': `1px solid black`,
            });
            this.draw = (destination) => {
                console.log(destination);
                destination.append(this.element);
                return;
            };
            this.describe = () => {
                console.log('Shape Info: ', `Type ${this.type} | Name: ${this.name} | Color: ${this.color} | Left: ${this.left} | Top: ${this.top} | Height: ${this.height} Width: ${this.width} | Radius: ${this.radius}`);
            };
        };
    };

    class Square extends Shape {
        constructor(name, left, top, length, color = '#ffffff') {
            super('square', name, left, top, length, length, length, color);
            this.height = length;
            this.width = length;
            this.radius = null;
        };
    };
    class Rectangle extends Shape {
        constructor(name, left, top, height, width, color = '#ffffff') {
            super('rectangle', name, left, top, height, width, height, color);
            this.height = height;
            this.width = width;
            this.radius = null;
        };
    };
    class Circle extends Shape {
        constructor(name, top, left, radius, color = '#ffffff') {
            super('circle', name, left, top, 2 * radius, 2 * radius, radius, color);
            this.height = 2 * radius;
            this.width = 2 * radius;
            this.radius = radius;
            this.element.css({
                'border': 'none',
            });
            this.draw = (destination) => {
                destination.append(this.element);
                this.canvas = document.getElementById(`${this.name}`);
                if (this.canvas.getContext) {
                    let ctx = this.canvas.getContext('2d');
                    let x = this.canvas.width / 4;
                    let y = this.canvas.height / 2;
                    let r = 74;
                    ctx.scale(2, 1); // For some reason the 'arc()' method assumes a 1:2 aspect ratio for the canvas, so scaling adjustments are necessary.
                    ctx.beginPath();
                    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#000000';
                    ctx.stroke();
                };
            };
        };
    };
    class Triangle extends Shape {
        constructor(name, left, top, height, width, color = '#ffffff') {
            super('triangle', name, left, top, height, width, null, color);
            this.height = height;
            this.width = width;
            this.element.css({
                'border': 'none',
            });
            this.draw = (destination) => {
                destination.append(this.element);
                this.canvas = document.getElementById(`${this.name}`);
                if (this.canvas.getContext) {
                    let ctx = this.canvas.getContext('2d');
                    ctx.beginPath();
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#000000';
                    ctx.moveTo(0, this.canvas.height);      // From bottom left corner
                    ctx.lineTo(this.canvas.width / 2, 0);    // To top mid-point
                    ctx.lineTo(this.canvas.width, this.canvas.height);  // To bottom right corner
                    ctx.lineTo(0, this.canvas.height);      // Back to start point
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#000000';
                    ctx.stroke();
                };
            };
        };
    };

    // ================== EVENT LISTENERS / FUNCTIONS ==================


    $("#square-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        console.log($('#square-input :input'));
        let length = $('#square-input :input')[0].value;  // $('#square-input :input') is an object, [0] is the child object 'input', and 'value' is an property of 'input'
        let newShape = new Square(shape_index, shape_left, shape_top, length);
        console.log(newShape);
        newShape.describe();
        newShape.draw($(`#shape-canvas`));
        shape_index++;

    });
    $("#rectangle-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        console.log($('#rectangle-input :input'));
        let height = $('#rectangle-input :input')[0].value;
        let width = $('#rectangle-input :input')[1].value;
        let newShape = new Rectangle(shape_index, shape_left, shape_top, height, width);
        console.log(newShape);
        newShape.describe();
        newShape.draw($(`#shape-canvas`));
        shape_index++;

    });
    $("#circle-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        console.log($('#circle-input :input'));
        let radius = $('#circle-input :input')[0].value;
        let newShape = new Circle(shape_index, shape_left, shape_top, radius);
        console.log(newShape);
        newShape.describe();
        newShape.draw($(`#shape-canvas`));
        shape_index++;

    });
    $("#triangle-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        console.log($('#triangle-input :input'));
        let height = $('#triangle-input :input')[0].value;
        let width = height;
        let newShape = new Triangle(shape_index, shape_left, shape_top, height, width);
        newShape.describe();
        newShape.draw($(`#shape-canvas`));
        shape_index++;
    });


    // Display correct input form for each shape, and clear out other input forms.
    $('#square-btn').click(() => {
        $('#square-input').css('display', 'block');
        $('#rectangle-input').css('display', 'none');
        $('#circle-input').css('display', 'none');
        $('#triangle-input').css('display', 'none');
    });
    $('#rectangle-btn').click(() => {
        $('#square-input').css('display', 'none');
        $('#rectangle-input').css('display', 'block');
        $('#circle-input').css('display', 'none');
        $('#triangle-input').css('display', 'none');
    });
    $('#circle-btn').click(() => {
        $('#square-input').css('display', 'none');
        $('#rectangle-input').css('display', 'none');
        $('#circle-input').css('display', 'block');
        $('#triangle-input').css('display', 'none');
    });
    $('#triangle-btn').click(() => {
        $('#square-input').css('display', 'none');
        $('#rectangle-input').css('display', 'none');
        $('#circle-input').css('display', 'none');
        $('#triangle-input').css('display', 'block');
    });


    // ======================= HELPER FUNCTIONS =======================
});