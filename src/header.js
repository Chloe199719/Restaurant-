const header = (() => {
  const firstElement = (hook) => {
    const header = document.createElement(`header`);
    const h1 = document.createElement(`h1`);
    const nav = document.createElement(`nav`);
    const ul = document.createElement(`ul`);
    const ul1 = document.createElement(`li`);
    const ul2 = document.createElement(`li`);
    const ul3 = document.createElement(`li`);
    h1.textContent = `The Cooked`;
    ul1.textContent = "Home";
    ul2.textContent = "Menus";
    ul3.textContent = "Contact";
    ul.appendChild(ul1);
    ul.appendChild(ul2);
    ul.appendChild(ul3);
    nav.appendChild(ul);
    header.appendChild(h1);
    header.appendChild(nav);
    hook.appendChild(header);
  };
  return { firstElement };
})();

export default header;
