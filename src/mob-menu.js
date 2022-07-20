
// ИКОНКИ ОТКРЫТИЯ И ЗАКРЫТИЯ
const menuOpenButton = document.querySelector('.menu-open__btn');
const mobileMenuBackdrop = document.querySelector('.mob-menu__backdrop');
const menuCloseButton = document.querySelector('.mobile-menu__close-button');
  
if (menuOpenButton) {
  menuOpenButton.addEventListener("click", function (e) {
    document.body.classList.toggle('menu-open');
    menuOpenButton.classList.toggle('active');
    mobileMenuBackdrop.classList.toggle('active');
  });

  menuCloseButton.addEventListener("click", function (e) {
    document.body.classList.remove('menu-open');
    menuOpenButton.classList.remove('active');
    mobileMenuBackdrop.classList.remove('active');
  });

}

// ПРОКРУТКА ПРИ КЛИКЕ
const menuLinks = document.querySelectorAll('.mobile-menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", openMenuLinkClick);
  });

  function openMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if (menuOpenButton.classList.contains('active')) {
        document.body.classList.remove('menu-open');
        menuOpenButton.classList.remove('active');
        mobileMenuBackdrop.classList.remove('active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}