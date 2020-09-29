//Parallax callback
export function handleShiftBackgrounds(layers, speedArr) {

    //mouse position
    let e = window.event;
    let posX = e.clientX;
    let posY = e.clientY;
  
    // assign movement
    for(let i = 0; i < layers.length; i++) {
      layers[i].style.backgroundPositionY = `-${posY*speedArr[i]}px`;
      layers[i].style.backgroundPositionX = `-${posX*speedArr[i]}px`;
    }
  }