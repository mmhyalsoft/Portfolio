// JavaScript source code
var ciccio = document.getElementById("test_js");

//ciccio.addEventListener('click', add);
ciccio.addEventListener('click', add);

function add() {
    console.log("passato");
    alert("funziona!");
}

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
});

