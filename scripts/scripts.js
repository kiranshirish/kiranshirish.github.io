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
    nav.style.right = "0";
})

navClose.addEventListener('click', () => {
    nav.style.right = "-20rem";
})


