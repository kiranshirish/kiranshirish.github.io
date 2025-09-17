<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QH0LDXLE51"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QH0LDXLE51');
</script>

const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-x');
const nav = document.querySelector('.nav-menu');

navOpen.addEventListener('click', () => {
    nav.style.right = "0";          // show menu
    navOpen.style.display = "none"; // hide hamburger
    navClose.style.display = "block"; // show close button
});

navClose.addEventListener('click', () => {
    nav.style.right = "-20rem";     // hide menu
    navOpen.style.display = "block"; // show hamburger
    navClose.style.display = "none"; // hide close button
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    nav.style.right = "-20rem";
    navOpen.style.display = "block";
    navClose.style.display = "none";
  });
});



