const projects = [
    {
        id: 1,
        title: "E-store",
        description: "Vue CLI eCommerce store",
        alt: "E-store",
        imgUrl: "images/work/E-store.webp",
        github: "https://github.com/anow47/my-store",
        live: "https://anow47.github.io/my-store/",
        btnName: "Live Demo"
    },
    {
        id: 2,
        title: "Multi-Step-Form",
        description: "HTML, CSS, Sass, and JS.",
        alt: "Portfolio",
        imgUrl: "images/work/mult-step-form.webp",
        github: "https://github.com/anow47/multi-step-form-main",
        live: "https://anow47.github.io/multi-step-form-main/",
        btnName: "Live Demo"
    },
    {
        id: 3,
        title: "Home-furniture",
        description: "HTML, SCSS, JavaScript.",
        alt: "Home_furniture",
        imgUrl: "images/work/furniture.webp",
        github: "ttps://github.com/anow47/home-furniture",
        live: "https://anow47.github.io/home-furniture/",
        btnName: "Live Demo"
    },
    {
        id: 4,
        title: "Alsnap Real Estate",
        description: "WordPress, HTML, CSS.",
        alt: "Alsnap_Real_Estate",
        imgUrl: "images/work/agari2030.webp",
        github: "#",
        live: "https://agari2030.com/",
        btnName: "Live Website"
    },
    {
        id: 5,
        title: "Sneakers",
        description: "React, e-commerce.",
        alt: "Sneakers",
        imgUrl: "images/work/sneakers.webp",
        github: "https://github.com/anow47/sneakers",
        live: "https://anow47.github.io/sneakers/",
        btnName: "Live Demo"
    },
]
const card = projects.map(item => {
  return`
    <article class="porject_items">
      <div class="porject_frame">
        <img src=${item.imgUrl} alt=${item.alt} />
        </div>
        <h2 class="project-title"><span>${item.title}: </span>${item.description}</h2>
        <div class="porject_item-cta">
        <a href=${item.github} class="btn" target="_blank">github</a>
        <a href=${item.live} class="live-demo" target="_blank">${item.btnName}</a>
      </div>
    </article>
  `
}).join('')

document.querySelector('.porjects').innerHTML = card