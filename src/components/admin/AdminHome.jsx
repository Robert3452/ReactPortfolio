import React from 'react';
import imgStatsPana from '../../assets/static/admin/browser-stats-pana.svg';
import imgProcesingPana from '../../assets/static/admin/processing-pana.svg';
import imgWindowsPana from '../../assets/static/admin/windows-pana.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CurrentDate from '../utils/CurrentDate';


const AdminHome = () => {

    return (
        <>
            <div className="row">
                <div className="card col-3">
                    <h4 className="sidebar-content-title">
                        Home
                    </h4>
                    <CurrentDate />

                </div>
            </div>
            <div className="presentation presentation__wrapper row row-gap30 mt-30 mb-30">
                <div className="presentation__card card presentation__item">
                    <div className="presentation__card-left">
                        <div className="presentation__card-left-title">
                            <h4>Manage my portfolio</h4>
                        </div>
                        <div className="presentation__card-left-body">
                            Create, Update, Delete and View all the posts and the contents that are in my app
                    </div>
                    </div>
                    <div className="presentation__card-right">
                        <img src={imgProcesingPana} alt="" />
                    </div>
                </div>
                <div className="presentation__card card presentation__item">
                    <div className="presentation__card-left">
                        <div className="presentation__card-left-title">
                            <h4>Enjoy my app</h4>
                        </div>
                        <div className="presentation__card-left-body">
                            Explore and search the things you would like
                    </div>
                    </div>
                    <div className="presentation__card-right">
                        <img src={imgStatsPana} alt="" />
                    </div>
                </div>
                <div className="presentation__card card presentation__item">
                    <div className="presentation__card-left">
                        <div className="presentation__card-left-title">
                            <h4>Watch all in this MERN Stack app</h4>
                        </div>
                        <div className="presentation__card-left-body">
                            Some features are will enabled when you're registered as an admin
            </div>
                    </div>
                    <div className="presentation__card-right">
                        <img src={imgWindowsPana} alt="" />

                    </div>
                </div>
            </div>

            <div className="overview row row-gap30 mt-30 mb-30">

                <div className="overview__card card col-2">
                    <div className="overview__card-left">
                        <h5>Page Views</h5>
                        <span>34</span>
                    </div>
                    <div className="overview__card-right">
                        <FontAwesomeIcon className="icon" icon={['fa', 'eye']} />
                    </div>
                </div>
                <div className="overview__card card col-2">
                    <div className="overview__card-left">
                        <h5>Clics on Contact</h5>
                        <span>4</span>
                    </div>
                    <div className="overview__card-right">
                        <FontAwesomeIcon className="icon" icon={['fas', 'sign-in-alt']} />
                    </div>
                </div>
                <div className="overview__card card col-2">
                    <div className="overview__card-left">
                        <h5>Clics on My Cv</h5>
                        <span>12</span>
                    </div>
                    <div className="overview__card-right">
                        <FontAwesomeIcon className="icon" icon={['fas', "hand-pointer"]} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default AdminHome;