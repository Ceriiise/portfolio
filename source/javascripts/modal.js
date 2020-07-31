const buttons = document.querySelectorAll('#modal-trigger');
const modal = document.querySelectorAll('.display-modal');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const modalTrigger = button.dataset.trigger;
    const modal = document.querySelector(`[data-modal="${modalTrigger}"]`);
    const scroll = window.scrollY;
    modal.style.width = "100vw";
    modal.style.top = window.scrollY + "px";
    document.body.classList.add("stop-scrolling");

    modal.addEventListener('click', (event) => {
      modal.style.width = "0";
      document.body.classList.remove("stop-scrolling");
    });
  });
});
