//=========SLIDERIS INDEXE================
$(document).ready(function(){
  $('.slider').slider();
    $('.materialboxed').materialbox();
});


// ==========================MENU========================
 $('.button-collapse').sideNav({
      menuWidth: '50%', // Default is 300
      edge: 'left', // Choose the horizontal origin
      // closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      // onOpen: function(el) { /* Do Stuff* / }, // A function to be called when sideNav is opened
      // onClose: function() {
      //    $('.kryziukas').addClass("$balta !important");
      // } // A function to be called when sideNav is closed
    }
  );

 $('.button-collapse').sideNav();
 $('.button-collapse').sideNav('destroy');
 $('.button-collapse').sideNav('hide');
 $('.button-collapse').sideNav('show');


function myFunction(x) {
     x.classList.toggle("change");
     $('.kryziukas').toggleClass('juoda');
 }

// ================AJAX=======================
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", "./visiemailai.php", true);
    xhttp.send();


}
// ==================Optimizavimas===========================
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 500px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
  } else {
     $('.fa').removeClass('fa-3x');
     $('.bar1, .bar2, .bar3').css({"width" : "30px", 'height': '4px', 'margin': '3px 0'});
     $('.menuMygtukas').css('margin', '0');
     $('.fa').css('padding-top', '5px');
  }

}
// ==============================ANIMATION====================




// FORM VALIDATOR=================//
function validateForm() {
    var x = document.forms["forma"]["vardas"].value;
    if (x == "") {
        alert("Įveskite vardą");
        return false;
    }
}


// ============================PALIKTI RAMYBEJE===========================
 (function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
