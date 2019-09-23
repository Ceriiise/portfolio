{
  const navbar = document.querySelector('.navbar-home');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-home-view');
      } else {
        navbar.classList.remove('navbar-home-view');
      }
    });
  }
}
