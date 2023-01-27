document.querySelector('iframe').onload = function() {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

console.log("Resizer is loading.");