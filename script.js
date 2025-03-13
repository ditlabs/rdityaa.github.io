// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector
('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const subject = `Pesan dari ${name} - Portfolio Contact`;
    const body = `Nama: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0APesan:%0D%0A${message}`;
  
    window.location.href = `mailto:radityarizki2309@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    this.reset();
  });