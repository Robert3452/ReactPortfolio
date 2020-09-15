import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = ({ title, work_link, content, work_img, work_demo }) => {
    return (
        // <a href={work_link} target="_blank">
        <div className="portfolio__grid__item">
            <img className="portfolio__grid__item-img" src={work_img.url} alt={title} />
            <div className="portfolio__grid__item__detail">
                <h4 className="portfolio__grid__item__detail-title">{title}</h4>
                <div className="portfolio__grid__item__detail__links">
                    <a href={work_link} target="_blank">
                        <FontAwesomeIcon className="portfolio__grid__item__detail__links-item" icon={["fab", "github"]} />
                    </a>
                    {work_demo &&
                        <a href={work_demo} target="_blank">
                            <FontAwesomeIcon className="portfolio__grid__item__detail__links-item" icon={["fas", "code"]} />
                        </a>
                    }
                </div>
                {/* <span className="portfolio__grid__item__detail-content">Lorem ipsum dolor sit.</span> */}
            </div>
        </div>
        // </a>
    )
}

export default PortfolioItem;