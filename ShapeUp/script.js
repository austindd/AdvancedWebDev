$(document).ready(function() {

    // ==================== SEMI-GLOBAL VARIABLES ====================






    // ========================== CLASSES ==========================

    class Shape {
        constructor(name, top, left) {
            this.name = name;
            this.top = top;
            this.left = left;
        };
    };

    class Square extends Shape {
        constructor(name, top, left, length) {
            super(name, top, left);
            this.length = length;  
        };     
    };

    class Rectangle extends Shape {
        constructor(name, top, left, height, width) {
            super(name, top, left);
            this.height = height;  
            this.width = width;
        };     
    };

    class Circle extends Shape {
        constructor(name, top, left, radius) {
            super(name, top, left);
            this.radius = radius;  
        };     
    };

    class Triangle extends Shape {
        constructor(name, top, left, height) {
            super(name, top, left);
            this.height = height;  
        };     
    };




    // ================== EVENT LISTENERS / FUNCTIONS ==================

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

    $("#square-input").submit(function(e) {
        e.preventDefault();    // Prevent form from reloading page

    });
    $("#rectangle-input").submit(function(e) {
        e.preventDefault();    // Prevent form from reloading page

    });
    $("#circle-input").submit(function(e) {
        e.preventDefault();    // Prevent form from reloading page

    });
    $("#triangle-input").submit(function(e) {
        e.preventDefault();    // Prevent form from reloading page

    });



});