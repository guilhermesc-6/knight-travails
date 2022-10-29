import { gameboard, uiController } from "./gameboard.js";

//DOM
const appController = (() => {
  gameboard();
  uiController();
})();
