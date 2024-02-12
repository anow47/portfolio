//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
const mask = document.querySelector('.mask')
const showMenu = document.querySelector('.toggle-menu');
const mobileMenu = document.querySelector('.mobile-ul')
const logo = document.querySelector(".logo-mobile");
const header = document.querySelector('.header_container')

showMenu.addEventListener('click', () => {
  mobileMenu.classList.add('show-nav-bar')
  mask.classList.add('transparent')
  logo.style.visibility = 'hidden'
})
mask.addEventListener('click', () => {
  mobileMenu.classList.remove('show-nav-bar')
  mask.classList.remove('transparent')
  logo.style.visibility = 'visible'
})

// when click on the mobile menu link, the menu and the mask closes
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-nav-bar')
    mask.classList.remove('transparent')
    logo.style.visibility = 'visible'
  })
})

// add active class to nav links
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach((link) => {
  link.addEventListener('click', function() {
    // remove active class from all navigation links
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
    // add active class to the clicked link
    this.classList.add('active');
  });
});


//Animation on scroll element fade-in
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
  
  // Remove the scroll event listener if all elements have been displayed
  if (document.querySelectorAll(".js-scroll.scrolled").length === scrollElements.length) {
    window.removeEventListener("scroll", handleScrollAnimation);
  }
};

window.addEventListener("scroll", handleScrollAnimation);

// Show more about me when button clicked
document.querySelector('.about-me-btn').addEventListener('click', () => {
  document.getElementById('text').classList.toggle('fade')
})

//when scroll down the header heigth shrinks 
window.onscroll = () => {
  if(scrollY >= 220){
    header.classList.add('stick')
  }else{
    header.classList.remove('stick')
  }
}