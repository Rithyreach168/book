const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bi-x-lg');
  navBar.classList.toggle('active');
});

window.onscroll = () =>{
  menuIcon.classList.remove('bi-x-lg');
  navBar.classList.remove('active')
}