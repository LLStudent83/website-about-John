function getBurgerMenu() {
  const burgerElement = document.getElementsByClassName(
    'header__nav__gamburger-container'
  )[0];
  document.body.addEventListener('click', (e) =>
    hendlerClick(e.target, burgerElement)
  );
}

function hendlerClick(elementWithEvent, burgerElement) {
  const headerNavListElement =
    document.getElementsByClassName('header__nav__list')[0];

  if (elementWithEvent === burgerElement) {
    headerNavListElement.classList.toggle('menu-visible');
  } else if (headerNavListElement) {
    headerNavListElement.classList.remove('menu-visible');
  }
}

getBurgerMenu();
