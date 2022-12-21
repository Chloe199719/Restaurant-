import elements from "./create";
import img1 from "./img1.jpg";
import img2 from "./img3.jpg";
import img3 from "./img4.jpg";
import img4 from "./img5.jpg";
import img5 from "./img6.jpg";
import img6 from "./img7.jpg";

const menu = (hook) => {
  const main = elements.main();
  const section1 = elements.section();
  const ul = elements.ul();
  const li1 = elements.li();
  const li2 = elements.li();
  const li3 = elements.li();
  const li4 = elements.li();
  const li5 = elements.li();
  const li6 = elements.li();
  section1.appendChild(elements.h2(`Pizzas`));
  li1.appendChild(elements.img(img1, "test", "200px"));
  li2.appendChild(elements.img(img2, "test", "200px"));
  li3.appendChild(elements.img(img3, "test", "200px"));
  li4.appendChild(elements.img(img4, "test", "200px"));
  li5.appendChild(elements.img(img5, "test", "200px"));
  li6.appendChild(elements.img(img6, "test", "200px"));
};
