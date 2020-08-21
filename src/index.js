import "./styles.css";

var trackerX = document.querySelector(".trackerx");
var trackerY = document.querySelector(".trackery");
var backing = document.querySelector(".page");

function mouse_position() {
  var e = window.event;

  var posX = e.clientX;
  var posY = e.clientY;

  trackerX.textContent = `posX: ${posX}`;
  trackerY.textContent = `posY: ${posY}`;
  backing.style.backgroundPositionY = `-${posY}px`;
  backing.style.backgroundPositionX = `-${posX}px`;
}

document.addEventListener("mousemove", mouse_position);
