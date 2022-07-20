(() => {
  const refs = {
    openModalSubBtn: document.querySelector('[data-modal-sub-open]'),
    closeModalSubBtn: document.querySelector('[data-modal-sub-close]'),
    modalSub: document.querySelector('[data-modal-sub]'),
    openSubModalBtn: document.querySelector('[data-sub-modal-open]'),

  };

  refs.openModalSubBtn.addEventListener('click', toggleModalSub);
  refs.openSubModalBtn.addEventListener('click', toggleModalSub);
  refs.closeModalSubBtn.addEventListener('click', toggleModalSub);

  function toggleModalSub() {
    document.body.classList.toggle("modal-sub-open")
    refs.modalSub.classList.toggle('is-hidden');
  }
})();
