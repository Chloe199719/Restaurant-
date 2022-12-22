import header from "./header";
import elements from "./create";
import { Home, event } from "./Home";
import menu from "./menu";
import "./style.css";

const content = document.querySelector(`#content`);

header(content);
const homebtn = document.querySelector(`.home`);
const menubtn = document.querySelector(`.menus`);

homebtn.addEventListener(`click`, function (e) {
  const temp1 = document.querySelector(`main`);
  temp1.remove();
  Home(content);
});
menubtn.addEventListener(`click`, function (e) {
  const temp1 = document.querySelector(`main`);
  temp1.remove();
  menu(content);
});

menu(content);
// Home(content);
