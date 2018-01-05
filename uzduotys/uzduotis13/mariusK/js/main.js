console.log("Labas");

$(function() {
    
    $(window).scroll()
    var p = $( "p:first" );
    var position = p.position();
    $( "p:last" ).text( "left: " + position.left + ", top: " + position.top );
    

     
    




    // $("h1").nextUntil("button").addClass("bg-info");
    
    // $('.container > *').click(function() {
    //     $(this).hide();
    // })

    // $('button').click(function() {
    //     $('body').addClass('bg-dark text-light')
    // })









}); // end of document ready function








