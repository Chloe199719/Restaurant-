import elements from "./create";

let main;
const Home = (hook) => {
  main = elements.main();
  const section1 = elements.section();
  const div1 = elements.div(`author`);
  const section2 = elements.section();
  section1.appendChild(elements.h2(`Who are we?`));
  section1.appendChild(
    elements.paragraph(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
    cum? Repellat rerum dolor vitae, tempora qui eos. Eius, asperiores.
    Repudiandae ullam error omnis voluptas quam natus, reprehenderit
    expedita recusandae qui.`)
  );
  section1.appendChild(
    elements.paragraph(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
    cum? Repellat rerum dolor vitae, tempora qui eos. Eius, asperiores.
    Repudiandae ullam error omnis voluptas quam natus, reprehenderit
    expedita recusandae qui.`)
  );
  section1.appendChild(elements.img(`img2.jpg`, "Pizza Picture", "500px"));
  section1.appendChild(div1);
  div1.appendChild(elements.span(`Photo By `));
  div1.appendChild(
    elements.link(
      `https://unsplash.com/@np1991?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
      `Narek Petrosyan`
    )
  );
  div1.appendChild(elements.span(` on `));
  div1.appendChild(
    elements.link(
      `https://unsplash.com/t/food-drink?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`,
      `Unsplash`
    )
  );
  section2.appendChild(elements.h2(`Where we are located`));
  section2.appendChild(
    elements.paragraph(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
    eos eligendi debitis, eveniet animi numquam perspiciatis voluptas
    maiores ipsa porro commodi ducimus quis sapiente officia molestias.
    Ullam animi placeat doloribus.`)
  );
  main.appendChild(section1);
  main.appendChild(section2);
  hook.appendChild(main);
};

const event = function () {
  return main;
};

export { Home, event };
