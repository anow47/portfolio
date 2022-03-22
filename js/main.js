//dark mode function
function lightMode() {
  let element = document.body;
  element.classList.toggle("light-mode");
}
//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function toggleMenu() {
  let showMenu = document.getElementById("ul");
  if (showMenu.style.display === "none") {
    showMenu.style.display = "block";
  } else {
    showMenu.style.display = "none";
  }
}
//slide up a project to show more info
function workInfo() {
  const images = document.querySelector("#snapShot1");
  let showInfo = document.querySelector("#info1");
  if (images.style.height === "500px") {
    images.style.height = "300px";
    images.style.borderBottomLeftRadius = "0px";
    images.style.borderBottomRightRadius = "0px";
    showInfo.style.display = "block";
    // console.log("info");
  } else {
    images.style.height = "500px";
    images.style.borderRadius = "10px"
    showInfo.style.display = "none";
  }
}
function workInfoTwo() {
  const images = document.querySelector("#snapShot2");
  let showInfo = document.querySelector("#info2");
  if (images.style.height === "500px") {
    images.style.height = "300px";
    images.style.borderBottomLeftRadius = "0px";
    images.style.borderBottomRightRadius = "0px";
    showInfo.style.display = "block";
    // console.log("info");
  } else {
    images.style.height = "500px";
    images.style.borderRadius = "10px"
    showInfo.style.display = "none";
  }
}
function workInfoThree() {
  const images = document.querySelector("#snapShot3");
  let showInfo = document.querySelector("#info3");
  if (images.style.height === "500px") {
    images.style.height = "300px";
    images.style.borderBottomLeftRadius = "0px";
    images.style.borderBottomRightRadius = "0px";
    showInfo.style.display = "block";
    // console.log("info");
  } else {
    images.style.height = "500px";
    images.style.borderRadius = "10px"
    showInfo.style.display = "none";
  }
}
//More about me
function showMore() {
  let showText = document.getElementById("text");
  if (showText.style.display === "none") {
    showText.style.display = "block";
  } else {
    showText.style.display = "none";
  }
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
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
