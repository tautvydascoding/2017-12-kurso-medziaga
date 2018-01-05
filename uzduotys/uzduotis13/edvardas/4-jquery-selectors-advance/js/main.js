console.log("Labas");


//uzdedam klase visiem li elemento broliam(netik li-bet ir jo broliam)
$('li').siblings('h3').addClass('h2 tai klase')
//antraji h3 padarome raudona
$('h3').next().addClass('bg-info');
//pirmam paveiksliukui uzdeti klase bg-danger
$('.petras').next().addClass('bg-danger');
//uzdeti klase ant visu broliu po'.petras'
$('.petras').nextAll().addClass('bg-danger');
//nuo li iki img visus brolius pakeisim
$('li').next().nextUntil('img').addClass('bg-warning');
