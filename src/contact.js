import elements from "./create";

const contact = (hook) => {
  const main = elements.main();
  hook.appendChild(main);
  const section1 = elements.section();
  main.append(section1);
  const text1 = elements.paragraph(
    `You can Email us on: thecooked@chloevision.com`
  );
  const text2 = elements.paragraph(
    `Or calls us on +49 2141239313 From Monday to Saturday  from 8:00 to 22:00`
  );
  const text3 = elements.paragraph("We are Located on : ");
  const text4 = elements.paragraph(`Falkenstraße 16, 81541 München`);
  text3.appendChild(text4);
  section1.append(elements.h2("Contact Us"), text1, text2, text3);
};

export default contact;
