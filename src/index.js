import header from "./header";
import elements from "./create";
import { Home, event } from "./Home";
import "./style.css";
const content = document.querySelector(`#content`);
header(content);
const test = document.querySelector(`h1`);
const test3 = document.querySelector(`li`);
Home(content);

const test1 = event();

test.addEventListener(`click`, function (e) {
  document.querySelector(`main`).remove();
  setTimeout(Home(content), 2000);
});

test3.addEventListener(`click`, function (E) {
  Home(content);
  const test1 = event();
  test.addEventListener(`click`, function (e) {
    test1.remove();
  });
});
