AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
  });
//pirmas slaideris
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    $('button.control_prev').click(function () {
        moveLeft();
    });

    $('button.control_next').click(function () {
        moveRight();
    });

});
//slider1=====
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider1 ul li').length;
	var slideWidth = $('#slider1 ul li').width();
	var slideHeight = $('#slider1 ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider1').css({ width: slideWidth, height: slideHeight });

	$('#slider1 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider1 ul li:last-child').prependTo('#slider1 ul');

    function moveLeft() {
        $('#slider1 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider1 ul li:last-child').prependTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    }

    function moveRight() {
        $('#slider1 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider1 ul li:first-child').appendTo('#slider1 ul');
            $('#slider1 ul').css('left', '');
        });
    }

    $('button.control_prev1').click(function () {
        moveLeft();
    });

    $('button.control_next1').click(function () {
        moveRight();
    });

});
//susisiekite slider down
$(function() {
    $('.btn').click (function() {
      $('html, body').animate({scrollTop: $('#Susisiekite').offset().top }, 'slow');
      return false;
    });
  });
  //Kontaktai slide down
  $(function() {
      $('.scrool').click (function() {
        $('html, body').animate({scrollTop: $('#Susisiekite').offset().top }, 'slow');
        return false;
      });
    });
    //mapas
    function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('googleMap'), {


        });
      }
