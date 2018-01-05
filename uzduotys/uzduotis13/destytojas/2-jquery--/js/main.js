console.log("Labas");


 $('h1').css("color", "#b1b1b1");

// daug css vienu metu
var manoStilius = {
    "font-size":  "80px",
    color: "red",
    border: "solid 2px #000"
};

$('h1').css(manoStilius);





$( 'h1' ).css({
	  width: function( index, value ) {
		console.log("curent width:" + value);
		return parseFloat( value ) * 1.5;
	  },
	  height: function( index, value ) {
		console.log("curent height: " + value);
		return parseFloat( value ) * 1.2;
      },
      color: function( index, value ) {
        console.log("mano spalva: " + value);
    }
});
