window.addEventListener("DOMContentLoaded", function(event) {
  var buttons = document.querySelectorAll('#modal-trigger');
  var modal = document.querySelectorAll('.display-modal');

  buttons.forEach(function (button) {
    button.addEventListener('click', function(event) {
      var modalTrigger = button.dataset.trigger;
      var modal = document.querySelector("." + modalTrigger);
      var scroll = window.scrollY;
      modal.style.width = "100vw";
      modal.style.top = window.scrollY + "px";
      document.body.classList.add("stop-scrolling");

      modal.addEventListener('click', function(event) {
        modal.style.width = "0";
        document.body.classList.remove("stop-scrolling");
      });
    });
  });
});
