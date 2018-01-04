console.log("Labas");

// uzkedam klase visiem 'li' bloliam (net li, bet visiem li tevo vaikam)
$('li').siblings().addClass( 'h2 tai klase' );

//
$('li').siblings('h3').addClass( 'h2 tai klase' );

$('ol:eq(1) h3').addClass( 'h1' );


// antraji h3 padarome raudona
$('h3').next().addClass('bg-info');

// pirmam paveiksliukui uzdeti klase bg-danger
$('.petras').next().addClass('bg-danger');
// uz deti klase ant visu broliu po '.pertas'
$('.petras').nextAll().addClass('bg-danger');

// nuo li iki img visus broilius pakeisim
$('li').next().nextUntil('img').addClass('bg-warning');

//
