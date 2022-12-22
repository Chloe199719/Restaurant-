import elements from "./create";
import img1 from "./img1.jpg";
import img2 from "./img3.jpg";
import img3 from "./img4.jpg";
import img4 from "./img5.jpg";
import img5 from "./img6.jpg";
import img6 from "./img7.jpg";
import img7 from "./img8.jpg";
import img8 from "./img9.jpg";
import img9 from "./img10.jpg";
import img10 from "./img11.jpg";

const menu = (hook) => {
  const main = elements.main();
  hook.appendChild(main);
  const section1 = elements.section();
  const section2 = elements.section();
  section1.classList.add(`menu1`);
  section2.classList.add(`menu2`);
  main.appendChild(section1);
  main.appendChild(section2);
  const ul = elements.ul();
  section1.appendChild(elements.h2(`Pizzas`));
  section1.appendChild(ul);
  const li1 = elements.li();
  const li2 = elements.li();
  const li3 = elements.li();
  const li4 = elements.li();
  const li5 = elements.li();
  const li6 = elements.li();
  ul.append(li1, li2, li3, li4, li5, li6);

  li1.append(
    elements.img(img1, "test", "200px"),
    elements.h3(`Peperoni`),
    elements.paragraph(`Some Descrition`)
  );
  li2.append(
    elements.img(img2, "test", "200px"),
    elements.h3(`Cake Like`),
    elements.paragraph(`Some Descrition`)
  );
  li3.append(
    elements.img(img3, "test", "200px"),
    elements.h3(`Meet`),
    elements.paragraph(`Some Descrition`)
  );
  li4.append(
    elements.img(img4, "test", "200px"),
    elements.h3(`California Pizza`),
    elements.paragraph(`Some Descrition`)
  );
  li5.append(
    elements.img(img5, "test", "200px"),
    elements.h3(`Extra Spicy`),
    elements.paragraph(`Some Descrition`)
  );
  li6.append(
    elements.img(img6, "test", "200px"),
    elements.h3(`Mushrooms`),
    elements.paragraph(`Some Descrition`)
  );
  const ul2 = elements.ul();
  section2.append(elements.h2(`Drinks`), ul2);

  const li21 = elements.li();
  const li22 = elements.li();
  const li23 = elements.li();
  const li24 = elements.li();
  ul2.append(li21, li22, li23, li24);
  li21.append(
    elements.img(img7, `test`, `200px`),
    elements.h3(`Coca Cola`),
    elements.paragraph(`Some description`)
  );
  li22.append(
    elements.img(img8, `test`, `200px`),
    elements.h3(`Pepsi`),
    elements.paragraph(`Some description`)
  );
  li23.append(
    elements.img(img9, `test`, `200px`),
    elements.h3(`Beer`),
    elements.paragraph(`Some description`)
  );
  li24.append(
    elements.img(img10, `test`, `200px`),
    elements.h3(`Monster`),
    elements.paragraph(`Some description`)
  );
};

export default menu;
