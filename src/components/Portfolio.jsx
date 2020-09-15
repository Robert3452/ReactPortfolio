import React from 'react';
import { connect } from 'react-redux';
import Work from './childrens/PortfolioItem'
import PreDesc from './childrens/PreDesc';

const Portfolio = (props) => {
    const { preDesc, works } = props;
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                {preDesc && <PreDesc {...preDesc[2]} />}
                {/* make category service */}
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
                    {works && works.map(work => (<Work key={work._id} {...work} />))}
                </div>
            </div>
        </section>

    )
}

const mapStateToProps = (state) => {
    return {
        works: state.works.data,
        preDesc: state.preDesc.data
    }
}

export default connect(mapStateToProps)(Portfolio);