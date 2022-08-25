import SnpaShot1 from '../../assets/work/Shopping.png'
import SnpaShot2 from '../../assets/work/portfolio.png'
import SnpaShot3 from '../../assets/work/Bisa Tech.png'

const data = [
    {
        id: 1,
        image: SnpaShot1,
        title: "Techi Tools used: HTML, CSS",
        github: "https://github.com/anow47/Techi",
        demo: "https://"
    },
    {
        id: 2,
        image: SnpaShot2,
        title: "Portfolio Tools used: HTML, CSS, and JavaScript.",
        github: "https://github.com/anow47/portfolio",
        demo: "https://"
    },
    {
        id: 3,
        image: SnpaShot3,
        title: "BisaTech Tools used: HTML, CSS.",
        github: "https://github.com/anow47/BisaTech",
        demo: "https://"
    }
]

const Work = () => {
    return (
        <work id="work">
            <h2>Work</h2>
            <div class="container">
                <div class="porjects scroll-element js-scroll fade-in">
                    {
                        data.map(({ id, image, title, github, demo }) => {
                            return (
                                <article key={id} className="porject_items">
                                    <div className="porject_fram">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h3>{}</h3>
                                    <div className="porject_item-cta">
                                        <a href={github} className="btn" target="_blank">github</a>
                                        <a href={demo} className="btn" target="_blank">Live Demo</a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </work>
    )
}

export default Work