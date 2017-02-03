// JavaScript source code
var apperead = 0;
var apperead2 = 0;
var apperead3 = 0;
var apperead4 = 0;

$(document).ready(function () {

    $(window).on('scroll', function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 1200;             // set to whatever you want it to be
        var scroll_pos_test2 = 1500;
        var scroll_pos_test3 = 1700;
        var scroll_pos_test4 = 2100;



      //  console.log(y_scroll_pos);

        if ((y_scroll_pos > scroll_pos_test) && (apperead === 0)) {
            $('#Left1').show(600);
        //    console.log("1 left = " + apperead);
            apperead = 1; // it works just once.
        }
        if ((y_scroll_pos > scroll_pos_test2) && (apperead2 === 0)) {
            $('#Right1').show(600);
          //  console.log("1 right = " + apperead2);
            apperead2 = 1; // it works just once.
            }
        if ((y_scroll_pos > scroll_pos_test3) && (apperead3 === 0)) {
            $('#Left2').show(600);
            //console.log("2 left = " + apperead3);
            apperead3 = 1; // it works just once.
        }
        if ((y_scroll_pos > scroll_pos_test4) && (apperead4 === 0)) {
            $('#Right2').show(600);
            //console.log("2 right = " + apperead4);
            apperead4 = 1; // it works just once.
        }

    });


});
