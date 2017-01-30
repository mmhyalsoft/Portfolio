// JavaScript source code
var ciccio = document.getElementById("test_js");

//ciccio.addEventListener('click', add);
ciccio.addEventListener('click', add);

function add() {
    console.log("passato");
    alert("funziona!");
}




var apperead = 0;
var apperead2 = 0;

// wait for my document to load up before start with this code
$(document).ready(function () {

    $('#test_js').hide(300).show(1000).delay(3000);
    //$("#test_js").slideUp(1000).delay(1000).slideDown(1000).delay(1000);
    //$("#test_js").fadeOut(1000).delay(1000).fadeIn(1000);
    //$("#test_js").toggle(1000);

    $("#test_js").css({ color: 'red' });

    //$('#test_js').html('test js');

    //listen to the event click
    $('#test_js2').on('click', function() {
        $('#test_js3').toggle();
    });


  
    $(window).on('scroll', function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 300;             // set to whatever you want it to be
        var scroll_pos_test2 = 650;


        console.log(y_scroll_pos);
        console.log(apperead);
        console.log(apperead2);

        if ((y_scroll_pos > scroll_pos_test2) && (apperead === 0)) {
            $('#test_js4').show(600);
            apperead = 1; // it works just once.
        }

       
        if ((y_scroll_pos > scroll_pos_test) && (apperead2 === 0)) {
            $('#test_js5').show(600);
            apperead2 = 1; // it works just once.
        } 
    });

    
});

