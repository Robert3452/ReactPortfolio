import React from 'react';
import CurrentDate from '../utils/CurrentDate';

const AdminClaims = () => {

    return (
        <>
            <div className="row">
                <div className="card col-3">
                    <h4 className="sidebar-content-title">
                        Your claims </h4>
                    <CurrentDate />
                </div>
            </div>
            <div className="crud_wrapper">

                <div className="card crud_wrapper_form col-4 mt-30">
                    <h3 className="mb-10">Add your claims</h3>
                    <form className="form">
                        <div className="form__group">
                            <h5>Title skill</h5>
                            <input placeholder="Example: Typescript" className="form__group-input" type="text" name="" />
                        </div>
                        <div className="form__group">
                            <h5>Percentage skill</h5>
                            <input className=" input-slide" type="range" min="1" max="100" defaultValue="50" />
                        </div>
                        <div className="form__group mt-10">
                            <button type="submit" className="btn btn-primary ">
                                Add Skill
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
                </div>
            </div>
        </>
    )
}


export default AdminClaims;