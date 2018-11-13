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
                'position': 'absolute',
                'display': `inline-block`,
                'top': `${this.top}px`,
                'left': `${this.left}px`,
                'height': `${this.height}`,
                'width': `${this.width}`,
                'border': `1px solid black`,
            });
            this.draw = (destination) => {
                destination.append(this.element);
                return;
            };
            this.describe = () => {
                return [`Type: ${this.type}`, `Name: ${this.name}`, `Left: ${this.left}`, `Top: ${this.top}`, `Height: ${this.height}`, `Width: ${this.width}`, `Radius: ${this.radius}`, `Color: ${this.color}`];
            };
        };
    };

    class Square extends Shape {
        constructor(name, left, top, length, color = '#ffffff') {
            super('square', name, left, top, length, length, null, color);
            this.element.css({
                'background-color': `${this.color}`,
            });
        };
    };

    class Rectangle extends Shape {
        constructor(name, left, top, height, width, color = '#ffffff') {
            super('rectangle', name, left, top, height, width, null, color);
            this.element.css({
                'background-color': `${this.color}`,
            });

        };
    };
    class Circle extends Shape {
        constructor(name, top, left, radius, color = '#ffffff') {
            super('circle', name, left, top, 2 * radius, 2 * radius, radius, color);
            this.element.css({
                'border': 'none',
            });
            this.draw = (destination) => {
                destination.append(this.element);
                this.canvas = document.getElementById(`${this.name}`);
                let ctx = this.canvas.getContext('2d');
                let x = this.canvas.width / 4; // Changing the center position to account for ctx.scale() below
                let y = this.canvas.height / 2; // Changing the center position to account for ctx.scale() below
                let r = 74; // Radius input from user determines height/width of <canvas> element, not literally the circle. 'r = 74' is (0.5 * <canvas> height) - 1px line width.
                ctx.scale(2, 1); // For some reason the 'arc()' method assumes a 1:2 aspect ratio for the canvas, causing square <canvas> elements to render an oval, so scaling adjustments are necessary.
                ctx.beginPath();
                ctx.arc(x, y, r, 0, 2 * Math.PI, false);
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000000';
                ctx.stroke();
                ctx.fillStyle = this.color;
                ctx.fill();
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
                let ctx = this.canvas.getContext('2d');
                ctx.beginPath();
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000000';
                ctx.moveTo(1, this.canvas.height - 1);      // From bottom left corner ('-1' accounting for line width = 2px)
                ctx.lineTo(this.canvas.width / 2, 1);    // To top mid-point
                ctx.lineTo(this.canvas.width - 1, this.canvas.height - 1);  // To bottom right corner
                ctx.lineTo(1, this.canvas.height - 1);      // Back to start point
                ctx.stroke();
                ctx.fillStyle = this.color;
                ctx.fill();
            };
        };
    };

    // ================== EVENT LISTENERS / FUNCTIONS ==================

    $("#square-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        let length = $('#square-input :input')[0].value;  // $('#square-input :input') is an object, [0] is the child object 'input', and 'value' is an property of 'input'
        shape_left = Math.floor(Math.random() * (600 - length));
        shape_top = Math.floor(Math.random() * (600 - length));
        let newShape = new Square(shape_index, shape_left, shape_top, length, 'red');
        console.log(newShape);
        newShape.draw($(`#shape-canvas`));
        newShape.element.click(() => {
            // Clear info columns
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            // Display shape info in columns on screen
            for (let i = 0; i < newShape.describe().length; i++) {
                // If array.length is even, split even between columns, if odd, favor first column.
                if (i < (Math.floor((newShape.describe().length + 1) / 2))) {   
                    $(`#info-col-1`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                } else {
                    $(`#info-col-2`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                };
            };
            console.log('Shape Info: ', newShape.describe());
            return;
        });
        newShape.element.dblclick(() => {
            $(`#info-col-1`).empty(); // Clear info columns
            $(`#info-col-2`).empty();
            newShape.element.remove(); // Remove shape from screen
            return;
        });
        shape_index++;
    });

    $("#rectangle-input").submit(function (e) {
        e.preventDefault();
        let height = $('#rectangle-input :input')[0].value;
        let width = $('#rectangle-input :input')[1].value;
        shape_left = Math.floor(Math.random() * (600 - width));
        shape_top = Math.floor(Math.random() * (600 - height));
        let newShape = new Rectangle(shape_index, shape_left, shape_top, height, width, 'green');
        console.log(newShape);
        newShape.draw($(`#shape-canvas`));

        newShape.element.click(() => {
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            for (let i = 0; i < newShape.describe().length; i++) {
                if (i < (Math.floor((newShape.describe().length + 1) / 2))) {
                    $(`#info-col-1`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                } else {
                    $(`#info-col-2`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                };
            };
            console.log('Shape Info: ', newShape.describe());
            return;
        });
        newShape.element.dblclick(() => {
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            newShape.element.remove();
            return;
        });
        shape_index++;
    });

    $("#circle-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        let radius = $('#circle-input :input')[0].value;
        shape_left = Math.floor(Math.random() * (600 - (2 * radius)));
        shape_top = Math.floor(Math.random() * (600 - (2 * radius)));
        let newShape = new Circle(shape_index, shape_left, shape_top, radius, 'purple');
        console.log(newShape);
        newShape.draw($(`#shape-canvas`));

        newShape.element.click(() => {
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            for (let i = 0; i < newShape.describe().length; i++) {
                if (i < (Math.floor((newShape.describe().length + 1) / 2))) {
                    $(`#info-col-1`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                } else {
                    $(`#info-col-2`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                };
            };
            console.log('Shape Info: ', newShape.describe());
            return;
        });
        newShape.element.dblclick(() => {
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            newShape.element.remove();
            return;
        });
        shape_index++;
    });

    $("#triangle-input").submit(function (e) {
        e.preventDefault();    // Prevent form from reloading page
        let height = $('#triangle-input :input')[0].value;
        let width = height;
        shape_left = Math.floor(Math.random() * (600 - width));
        shape_top = Math.floor(Math.random() * (600 - height));
        let newShape = new Triangle(shape_index, shape_left, shape_top, height, width, 'yellow');
        newShape.draw($(`#shape-canvas`));

        newShape.element.click(() => {
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            for (let i = 0; i < newShape.describe().length; i++) {
                if (i < (Math.floor((newShape.describe().length + 1) / 2))) {
                    $(`#info-col-1`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                } else {
                    $(`#info-col-2`).append(`<p style='margin: 0'>${newShape.describe()[i]}</p>`);
                };
            };
            console.log('Shape Info: ', newShape.describe());
            return;
        });
        newShape.element.dblclick(() => {
            $(`#info-col-1`).empty();
            $(`#info-col-2`).empty();
            newShape.element.remove();
            return;
        });
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