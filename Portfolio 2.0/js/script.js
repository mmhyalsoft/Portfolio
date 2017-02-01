// JavaScript source code
var apperead = 0;
var apperead2 = 0;

$(document).ready(function () {

    $(window).on('scroll', function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 2000;             // set to whatever you want it to be
        var scroll_pos_test2 = 2300;



        console.log(y_scroll_pos);
        console.log(apperead);


        if ((y_scroll_pos > scroll_pos_test) && (apperead === 0)) {
            $('.timeline-left').show(600);
            apperead = 1; // it works just once.
        }
        if ((y_scroll_pos > scroll_pos_test2) && (apperead2 === 0)) {
            $('.timeline-inverted').show(600);
            apperead2 = 1; // it works just once.
        }
    });


});
