let author = document.querySelector('#author');

let body = document.querySelector('body');

let para = document.querySelector('#para')

let li = document.querySelector('li:nth-child(3)');

let content2 = document.querySelector('#content2');

let url = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`;

let data = undefined;

let button = document.querySelector('#button');

function Color(){
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

$(body).css('background-color', `${Color()}`);
$('#para').css('color', $(body).css('background-color')).css({opacity: 0}).delay(800).animate({opacity: 1}, 2300);
$('li:nth-child(3)').css('background-color', $(body).css('background-color'));

$.ajax(url, {method: 'GET'}).done(function(data){
  $(content2).html(data[0].content.replace(/<\/?[^>]+(>|$)/g, ""));
  $(author).text(`- ${data[0].title}`);
});

$(button).on('click', function(){
  let a = Color();
  [body, li, para].forEach((el, i) => {
    if(i === 2) {
      $(el).css('color', a);
    }
    else {
    $(el).css('background-color', a);
   }
 });
  $(content2).animate({opacity: 0}, 700).delay(800);
  $(author).animate({opacity: 0}, 700).delay(800);
 $.ajax(url, {method: 'GET'}).done(function(data){
    $(content2).html(data[0].content.replace(/<\/?[^>]+(>|$)/g, ""));
    $(author).text(`- ${data[0].title}`);
    $(content2).animate({opacity: 1}, 1400);
    $(author).animate({opacity: 1}, 1400);
  });
});
