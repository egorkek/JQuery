var name, checker;
$(function () {
  $('h1').css('border', 'solid 3px red');
  $('p').click(function () {
    console.log('hi');
  });
  $('p').dblclick(function () {
    $(this).toggleClass('blue');
  });
  $('h2').hover(function () {
    $(this).toggleClass('blue');
  });
  $('h1').mouseenter(function () {
    $(this).toggleClass('blue');
  });
  $('button').click(function () {
    name= $('#name').val();
    checker= $('#checker').val();
    console.log(name + checker);
  })
  $('.box:first').click(function () {
    $(this).animate({'width':'200px'}, 1000);
  });
  $('img').click(function () {
    console.log($(this).attr('src'));
    $(this).fadeOut(1000, function () {
      if($(this).attr('src')==='img/2.img.jpg')
      $(this).attr('src','img/1.jpg').fadeIn(1000);
      else {
        $(this).attr('src','img/2.img.jpg').fadeIn(1000);
      }
      console.log($(this).attr('src'));

    });


  });
});
//.wrap() обернуть тег в другой тег
//.
