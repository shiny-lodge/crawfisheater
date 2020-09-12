var trackerX = document.querySelector(".trackerx");
var trackerY = document.querySelector(".trackery");
var backclose = document.querySelector(".background");
var backmid = document.querySelector(".background-mid");
var backfar = document.querySelector(".page");

function mouse_position() {
  var e = window.event;

  var posX = e.clientX;
  var posY = e.clientY;

  const speedLayerTop = 0.5;
  const speedLayerMid = speedLayerTop * 0.7;
  const speedLayerBottom = speedLayerTop * 0.3;

  trackerX.textContent = `posX: ${posX}`;
  trackerY.textContent = `posY: ${posY}`;
  backfar.style.backgroundPositionY = `-${posY*speedLayerBottom}px`;
  backfar.style.backgroundPositionX = `-${posX*speedLayerBottom}px`;
  backmid.style.backgroundPositionY = `-${posY*speedLayerMid}px`;
  backmid.style.backgroundPositionX = `-${posX*speedLayerMid}px`;
  backclose.style.backgroundPositionY = `-${posY*speedLayerTop}px`;
  backclose.style.backgroundPositionX = `-${posX*speedLayerTop}px`;
}

document.addEventListener("mousemove", mouse_position);
