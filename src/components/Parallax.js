class Parallax {
    constructor(layers, handleShiftBackgrounds) {
      this._layers = layers;
      this._handleShiftBackgrounds = handleShiftBackgrounds;
    }
  
    _setSpeeds() {
      const layersNumber = this._layers.length;
      const speedArr = [0.2];
      for(let i = 1; i < layersNumber; i++) {
        speedArr[i] = speedArr[i-1] + 0.2;
      }
      return speedArr;
    }
  
    setListener() {
      document.addEventListener("mousemove", () => {
        this._handleShiftBackgrounds(this._layers, this._setSpeeds());
      });
    }
  }

  export default Parallax;