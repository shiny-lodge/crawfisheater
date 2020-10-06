//import
import './index.css';
import Parallax from "../components/Parallax.js";
import * as funcs from "../utils/functions.js";
import * as consts from "../utils/consts.js";

//init
const parallax = new Parallax(consts.layers, funcs.handleShiftBackgrounds);
parallax.setListener();



