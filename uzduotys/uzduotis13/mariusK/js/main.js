console.log("Labas");

$(function() {
    
   $('input').on("keypress", function() {
       var ivestis = $('input[name=unername]').val();
       $('h1').eq(0).text(ivestis);
   })








}); // end of document ready function








