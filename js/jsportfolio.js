

// const navbarToggler = document.querySelector('.navbar-toggler');
// const navbarCollapse = document.querySelector('.navbar-collapse');

// navbarToggler.addEventListener('click', () => {
//   navbarCollapse.classList.toggle('show');
// });


document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarIcon = document.querySelector('.navbar-toggler-icon');
  const navbar = document.querySelector('.navbar');

  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
    navbarIcon.classList.toggle('rotated');
    navbar.classList.toggle('show');
  });
});
