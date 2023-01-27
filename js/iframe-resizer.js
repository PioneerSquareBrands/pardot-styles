document.querySelector('iframe').onload = function() {
  document.querySelector('iframe').style.height = document.querySelector('iframe').contentWindow.document.documentElement.scrollHeight + 'px';
}

console.log("Resizer is loading.");