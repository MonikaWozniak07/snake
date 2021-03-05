export let ROWS, COLS, CELL;

function resizeBoard(e) {
  e.preventDefault();
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  if (mediaQuery.matches) {
    ROWS = 10;
    COLS = 10;
    CELL = 30;
  } else {
    ROWS = 15;
    COLS = 15;
    CELL = 30;
  }
}
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  ROWS = 10;
  COLS = 10;
  CELL = 30;
} else {
  ROWS = 15;
  COLS = 15;
  CELL = 30;
}
window.addEventListener("resize", resizeBoard);
export const BODY = 1,
  FOOD = 2;
export const START = 44;
export const KEYS = { left: 37, up: 38, right: 39, down: 40 };
export const DIRS = { 37: true, 38: true, 39: true, 40: true };
