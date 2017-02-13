var carusel = [];
var count = 0;
carusel= ["img/amorcito.jpg", "img/avion.jpg", "img/blue.jpg", "img/hi.jpg", "img/playa.jpg"];

$("#next").on("click", function(){
  count = count +1;
  if (count >= carusel.length){
    count = 0;
  }
  $("img").attr("src", carusel[count]);
});

$("#back").on("click", function(){
  count = count -1;
  if (count < 0){
    count = carusel.length -1;
  }
  $("img").attr("src", carusel[count]);
});
