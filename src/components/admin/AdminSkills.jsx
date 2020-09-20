import React from 'react';
import CurrentDate from '../utils/CurrentDate'

const AdminSkills = () => {
    return (
        <>
            <div className="row">
                <div className="card col-3">
                    <h4 className="sidebar-content-title">
                        Your skills </h4>
                    <CurrentDate />
                </div>
            </div>
            <div className="crud_wrapper">
                <div className="form__skills card crud_wrapper_form  col-4 mt-30">
                    <h3 className="mb-10">Add your skills</h3>
                    <form action="" className="form">
                        <div className="form__group">
                            <h5>Title Claims</h5>
                            <input type="text" className="form__group-input" placeholder="Example: Programming" />
                        </div>
                        <div className="form__group mb-10">
                            <h5>Select an Icon</h5>
                            <div id="dropIcons" className="dropdown">
                                <button className="btn btn-primary btn-dropdown" type="button">Icons <i className="fas fa-chevron-down"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <input type="text" className="searchable_input" placeholder="Search...." id="searchIcons" />
                                    <ul className="dropdown-list">
                                        <li><a href="#" className="dropdown-list-item"><i className="fas fa-home"></i> <span>Home</span></a></li>
                                        <li><a href="#" className="dropdown-list-item"><i className="fas fa-home"></i> <span>Home</span></a></li>
                                        <li><a href="#" className="dropdown-list-item"><i className="fas fa-home"></i> <span>Home</span></a></li>
                                        <li><a href="#" className="dropdown-list-item"><i className="fas fa-home"></i> <span>Home</span></a></li>
                                        <li><a href="#" className="dropdown-list-item"><i className="fas fa-home"></i> <span>Home</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form__group">
                            <h5>Content skill</h5>
                            <textarea name="content"
                                placeholder="Insert the content of the claim"
                                className="form__group-input"
                                cols="30"
                                maxLength="250"
                                rows="5"></textarea>
                        </div>

                        <div className="form__group mt-10"><button type="submit" className="btn btn-primary ">Add Claim</button>
                        </div></form></div>
                <div className="crud_wrapper_view mt-30">
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSkills;