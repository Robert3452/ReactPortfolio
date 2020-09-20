import React from 'react';
import CurrentDate from '../utils/CurrentDate';

const AdminWorks = () => {
    return (
        <>
            <div className="row">
                <div className="card col-3">
                    <h4 className="sidebar-content-title">
                        Your works </h4>
                    <CurrentDate />
                </div>
            </div>
            <div className="crud_wrapper">
                <div className="form__portfolio card crud_wrapper_form  col-4 mt-30">
                    <h3 className="mb-10">Add your works into the portfolio</h3>
                    <form action="" className="form">
                        <div className="form__group">
                            <h5>Title of the work</h5>
                            <input name="title" type="text" className="form__group-input"
                                placeholder="Example: Programming" />
                        </div>
                        <div className="form__group">
                            <h5>Link of the work (optional)</h5>
                            <input type="text" name="work_link" className="form__group-input"
                                placeholder="Paste the link of the work that will redirect your portfolio" />
                        </div>
                        <div className="form__group">
                            <h5>Link of the demo (optional)</h5>
                            <input type="text" name="work_link" className="form__group-input"
                                placeholder="Paste the link of the work that will redirect your portfolio" />
                        </div>
                        <div className="form__group">
                            <h5>Content work</h5>
                            <textarea name="content" placeholder="Insert the content of the work"
                                className="form__group-input" cols="30" maxLength="250" rows="5"></textarea>
                        </div>
                        <div className="form__group">
                            <h5>Add an image of the work !</h5>
                            <div className="input-file-container mb-20">
                                <input type="file" name="work_link" className="form__group-input-file"
                                    placeholder="Paste the link of the work that will redirect your portfolio" />
                                <label className="form__group-input-file-trigger">Upload an image... <i className="fas fa-upload"></i> </label>
                                <p className="file-return"></p>
                            </div>

                        </div>
                        <div className="form__group mt-10">
                            <button type="submit" className="btn btn-primary ">
                                Add Work
                            </button>
                        </div>
                    </form>
                </div>
                <div className="crud_wrapper_view mt-30">
                    <div className="crud_wrapper_view_item card">
                        <span>hola</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default AdminWorks;