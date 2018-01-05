console.log("Labas");
//paslepti h1
$('h1').hide();
//paslepti h2,kai ant jo paspaudi
$('h2').click(function(event){
    $('h2').hide();


});

function uzdedaFona(){
    $('h3').css('background-color','red');
}
uzdedaFona();
//uzduotis
//sukurti mygtuka(div)kuri paspaudus visas fonas bus juodas
//o visi tekstai taptu balti
$('button').click(function(event){
    $('body').toggleClass('bg-dark text-light');
});

//uzejimas su pele ir elementas dingsta po biski

function isnyksta2(x){
    $(x).fadeToggle(3000);}

    $('img').on('click',function(){
        $('h5').fadeToggle(1000);
    });

    $('img').on('mouseenter',function(){
        $('img').fadeTo(1100,0.25);
        $('img').css('position','absolute')
        var stilius={
            top:0,
            right:"0px",
            width:"500px",
            height:"500px"
        };
        $(this).animate(stilius,4000)
    });
