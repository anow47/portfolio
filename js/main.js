//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
let mask = document.getElementById("mask")
let showMenu = document.getElementById("mobile-ul");
let logo = document.getElementById("logo-mobile");
function toggleMenu() {
  mask.style.display === "none"? mask.style.display = "block" : mask.style.display = "none"
  showMenu.style.display === "none" ? showMenu.style.display = "block" : showMenu.style.display = "none";
  logo.style.display = "none"
}
function closeToggleMenu() {
  showMenu.style.display = "none"
  mask.style.display = "none"
  logo.style.display = "block"
}

function closeMenu() {
  showMenu.style.display = "none"
  mask.style.display = "none"
}

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

// change toggle icon with arrow function
// changeIcon = (icon)=> icon.classList.toggle('fa-times')

//More about me
let showText = document.getElementById("text");
function showMore() {
  showText.classList.toggle('fade')
}


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
