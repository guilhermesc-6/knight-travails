import { gameboard } from "./gameboard.js";
import { knightsTravails } from "./knight-travails.js";

//DOM
const appController = (() => {
  gameboard();
  knightsTravails([3, 3], [4, 3]);
})();
