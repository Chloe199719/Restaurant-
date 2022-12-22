import header from "./header";
import { Home } from "./Home";
import menu from "./menu";
import "./style.css";
import contact from "./contact";
import footer from "./footer";

const content = document.querySelector(`#content`);
const body = document.querySelector(`body`);

header(content);
const homebtn = document.querySelector(`.home`);
const menubtn = document.querySelector(`.menus`);
const contactbtn = document.querySelector(`.contact`);

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

contactbtn.addEventListener(`click`, function (e) {
  const temp1 = document.querySelector(`main`);
  temp1.remove();
  contact(content);
});

Home(content);
footer(body);
// Home(content);
