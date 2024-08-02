$(".slide > img:gt(0)").hide();

setInterval(function() {
  $('.slide > img:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('.slide');
},  6000);