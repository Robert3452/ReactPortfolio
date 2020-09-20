import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar toggle ">
            <div className="sidebar-container">
                <h4 className="sidebar_title">Dashboard</h4>
                <div className="list">
                    <a href="#">
                        <div className="list_item">
                            Access
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Profile
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Skills
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Claims
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Portfolio
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Timeline
                        </div>
                    </a>
                </div>
                <h4 className="sidebar_title">Chat </h4>
                <div className="list">
                    <a href="#">
                        <div className="list_item">
                            Signin
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            Signup
                        </div>
                    </a>
                    <a href="#">
                        <div className="list_item">
                            My chat
                        </div>
                    </a>
                </div>
            </div>
        </nav>

    )
}

export default Sidebar;