import React from 'react';


const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="content">
                    <h3 className="content-title">
                        I love what I do
                </h3>
                    <div className="content-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas numquam necessitatibus in nulla eius
                        deleniti voluptas sit aspernatur suscipit corrupti. Quibusdam ratione accusamus nesciunt ipsam quos
                        minus corrupti quisquam quo?
                </div>
                </div>
                <div className="portfolio__filter">
                    <div className="portfolio__filter-item">
                        <button type="button" className="btn"> All projects </button>
                    </div>
                    <div className="portfolio__filter-item">
                        <button type="button" className="btn"> Frontend </button>
                    </div>
                    <div className="portfolio__filter-item">
                        <button type="button" className="btn"> Backend </button>
                    </div>
                    <div className="portfolio__filter-item">
                        <button type="button" className="btn"> Mobile </button>
                    </div>
                    <div className="portfolio__filter-item">
                        <button type="button" className="btn"> Art. intelligence </button>
                    </div>
                </div>

                <div className="portfolio__grid">
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g1.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g2.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g3.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g4.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g5.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g6.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g7.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="portfolio__grid__item">
                        <img className="portfolio__grid__item-img" src="./assets/img/g8.jpg" alt="" />
                        <div className="portfolio__grid__item__detail">
                            <h4 className="portfolio__grid__item__detail-title">First Project</h4>
                            <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio;