let quote = document.querySelector('#quote');

let title = document.querySelector('#title')

let button = document.querySelector('#button');

let target = document.querySelector('#target');

let titleShow = 'row justify-content-end mr-3 mt-2 showMe';
let titleHide = 'row justify-content-end mr-3 mt-2 hideMe';
let data;

function getAquote () {
  let date = new Date();
  let url = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?' + date.getTime();
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200) {
      data = JSON.parse(this.responseText);
      if(quote.innerHTML) {
        quote.innerHTML = '';
      }
      let textNode = document.createTextNode(' ' + data[0].content.replace(/<\/?[^>]+(>|$)/g, "").replace(/&#\d{1,4}\;/g, ""));
      let icon = document.createElement('i');
      icon.className = "fa fa-quote-left";
      quote.appendChild(icon);
      quote.appendChild(textNode);
      title.textContent = ' - ' + data[0].title;
      target.className = 'showMe';
      setTimeout(() => {
        quote.className = 'showMe';
        title.className = titleShow;
      }, 111);
    } else {
        console.log('reached eles in AJAX call');
      }

    };
  xml.open('GET', url, true);
  xml.send();
}


button.addEventListener('click', function() {
  setTimeout (getAquote, 1000);
  setTimeout(() => {
    quote.className = 'hideMe';
    title.className = titleHide;
  }, 220);

});
