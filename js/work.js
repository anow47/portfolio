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
  }
  else {
    images.style.height = "500px";
    images.style.borderRadius = "10px";
    showInfo.style.display = "none";
  }
}
