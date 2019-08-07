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

if (queryParams.title) {
  document.getElementsByClassName('header__title')[0].innerHTML = queryParams.title;
}

if (queryParams.cssUrl) {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', queryParams.cssUrl);
  document.getElementsByTagName('head')[0].appendChild(link);
}

if (queryParams.deviceClass) {
  document.getElementsByTagName('html')[0].className = queryParams.deviceClass;
}
