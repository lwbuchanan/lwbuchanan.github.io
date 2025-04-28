
myMove();



var id = null;

function myMove() {
  var elem = document.querySelector(".bouncing");   
  var x = elem.getBoundingClientRect().x;
  var y = elem.getBoundingClientRect().y;
  var w = elem.getBoundingClientRect().width;
  var h = elem.getBoundingClientRect().height;
  var xinc = 1;
  var yinc = 1;
  clearInterval(id);
  id = setInterval(frame, 8);
  function frame() {
    x += xinc; 
    y += yinc; 
    elem.style.top = y + 'px'; 
    elem.style.left = x + 'px'; 
    if (x + w >= window.innerWidth || x <= 0) {
      xinc *= -1;
    } 

    if (y + h >= window.innerHeight || y <= 0) {
      yinc *= -1
    }
  }
}