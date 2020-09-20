import React from 'react';
import CurrentDate from '../utils/CurrentDate'

const AdminPredesc = () => {
    return (

        <>
            <div className="row">
                <div className="card col-3">
                    <h4 className="sidebar-content-title">
                        Pre-description</h4>
                    <CurrentDate />
                </div>
            </div>
            <div className="crud_wrapper">
                <div className="card crud_wrapper_form col-4 mt-30">
                    <h3 className="mb-10">Add a predescription in the content of the portfolios</h3>
                    <form className="form">
                        <div className="form__group">
                            <h5>Title</h5>
                            <input placeholder="Example: Typescript" className="form__group-input" type="text" name="" />
                        </div>
                        <div className="form__group mb-10">
                            <h5>Type</h5>
                            <div id="" className="dropdown">
                                <button className="btn btn-primary btn-dropdown" type="button">Type <i
                                    className="fas fa-chevron-down"></i></button>
                                <div className="dropdown-menu">
                                    <ul className="dropdown-list">
                                        <li>
                                            <a href="#" className="dropdown-list-item"><i className="fas fa-code-branch">
                                            </i> <span>Experience</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-list-item"><i className="fas fa-university">
                                            </i> <span>Education</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="form__group">
                            <h5>Content</h5>
                            <textarea name="content" placeholder="Insert the details of the Hito"
                                className="form__group-input" cols="30" maxLength="250" rows="5"></textarea>
                        </div>
                        <div className="form__group mt-10">
                            <button type="submit" className="btn btn-primary ">
                                Add Hito
                            </button>
                        </div>
                    </form>

                </div>
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

export default AdminPredesc;