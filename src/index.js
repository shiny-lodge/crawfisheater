var trackerX = document.querySelector(".trackerx");
var trackerY = document.querySelector(".trackery");
var backclose = document.querySelector(".background");
var backmid = document.querySelector(".background-mid");
var backfar = document.querySelector(".page");

function mouse_position() {
  var e = window.event;

  var posX = e.clientX;
  var posY = e.clientY;

  trackerX.textContent = `posX: ${posX}`;
  trackerY.textContent = `posY: ${posY}`;
  backfar.style.backgroundPositionY = `-${posY*0.3}px`;
  backfar.style.backgroundPositionX = `-${posX*0.3}px`;
  backmid.style.backgroundPositionY = `-${posY*0.7}px`;
  backmid.style.backgroundPositionX = `-${posX*0.7}px`;
  backclose.style.backgroundPositionY = `-${posY}px`;
  backclose.style.backgroundPositionX = `-${posX}px`;
}

document.addEventListener("mousemove", mouse_position);
