$(document).ready(function() {


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



});