import elements from "./create";
import img1 from "./img1.jpg";
import img2 from "./img3.jpg";
import img3 from "./img4.jpg";
import img4 from "./img5.jpg";
import img5 from "./img6.jpg";
import img6 from "./img7.jpg";

const menu = (hook) => {
  const main = elements.main();
  hook.appendChild(main);
  const section1 = elements.section();
  const section2 = elements.section();
  main.appendChild(section1);
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
};

export default menu;
