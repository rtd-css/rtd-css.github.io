//
// Parse query string
//

function parseQueryParams(queryString) {
  var obj = {};
  var pairs = queryString.split('&');
  var i;
  for (i = 0; i < pairs.length; i++) {
    var split = pairs[i].split('=');
    obj[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
  }
  return obj;
}

var queryString = (location.search && location.search.substring(1)) || '';
var queryParams = parseQueryParams(queryString);

//
// Title
//

function setTitle(title) {
  document.getElementsByClassName('header__title')[0].innerHTML = title;
}

if (queryParams.title) {
  setTitle(queryParams.title);
}

setInterval(
  function () {
    var title = window.frameElement.getAttribute('rtd-description');
    title = title || '&nbsp';
    setTitle(title);
  },
  10,
);

//
// Css
//

if (queryParams.cssUrl) {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', queryParams.cssUrl);
  document.getElementsByTagName('head')[0].appendChild(link);
}

//
// Js
//

if (queryParams.jsUrl) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', queryParams.jsUrl);
  document.body.appendChild(script);
}

//
// Device class
//

if (queryParams.deviceClass) {
  document.getElementsByTagName('html')[0].className = queryParams.deviceClass;
}
