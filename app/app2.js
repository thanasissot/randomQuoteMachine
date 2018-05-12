let body = document.querySelector('body');

let div = document.querySelector('#target')

let notmain = document.querySelector('.notmain');

function Color(){
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

let a = Color();

$(body).css('background-color', `${a}`);
$(div).css('color', `${a}`)
$(button).css('background-color', `${a}`);
$(tweet).css('color', `${a}`);
$(quote).css('opacity', 0).animate({opacity: 1}, 1500);

$(button).on('click', function(){
  let b = Color();
  $(body).css('background-color', `${b}`);
  $(div).css('color', `${b}`)
  $(button).css('background-color', `${b}`);
  $(tweet).css('color', `${b}`);
  $(quote).css('opacity', 0).delay(700).animate({opacity: 1}, 1500);
});
