document.querySelector('iframe').onload = function() {
  document.querySelector('iframe').style.height = document.querySelector('iframe').contentWindow.document.documentElement.scrollHeight - 350 + 'px';
}

console.log("Resizer is loading.");