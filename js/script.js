$(document).ready(function(){
$('.link').each(function(i){
  setTimeout(function(){
    $('.link').css({
      'opacity': '1',
      'transform': 'translateX(0px)'
    });
  },i*300);
});
$(window).scroll(function(){
var wscroll = $(this).scrollTop();

if(wscroll > $('.what-we-do').offset().top /2 - 110){
$('.flex-unit').each(function(i){
  setTimeout(function(){
    $('.flex-unit').eq(i).css({
      'transform':'translateY(0px)',
      'opacity':'1'
    });
  }, i*300);
});
}
if(wscroll > $('.services').offset().top){
$('.not-here').each(function(i){
  setTimeout(function(){
    $('.not-here').eq(i).css({
      'transform':'translateY(0px)',
      'opacity':'1'
    });
  }, i*300);
});
}
if(wscroll > $('.meet-the-team').offset().top /2 - 110){
$('.not-here').each(function(i){
  setTimeout(function(){
    $('.not-here').eq(i).css({
      'transform':'translateX(0px)',
      'opacity':'1'
    });
  }, i*300);
});
}
});
});
