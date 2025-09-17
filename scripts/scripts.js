const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const nav = document.querySelector('.nav-menu');

// Open menu
navOpen.addEventListener('click', () => {
  if (window.innerWidth <= 1200) {   // only mobile
    nav.style.right = "0";
    navOpen.style.display = "none";
    navClose.style.display = "block";
  }else{
    navOpen.style.display = "none";
    navClose.style.display = "none";
  }
});

// Close menu
navClose.addEventListener('click', () => {
  if (window.innerWidth <= 1200) {   // only mobile
    nav.style.right = "-20rem";
    navOpen.style.display = "block";
    navClose.style.display = "none";
  }else{
    navOpen.style.display = "none";
    navClose.style.display = "none";
  }
});

// Close when clicking a link (mobile only)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1200) {
      nav.style.right = "-20rem";
      navOpen.style.display = "block";
      navClose.style.display = "none";
    }
  });
});
