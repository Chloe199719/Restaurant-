import elements from "./create";

const Home = (hook) => {
  const main = elements.main();
  const section1 = elements.section();
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

  main.appendChild(section1);
  hook.appendChild(main);
};

export default Home;
