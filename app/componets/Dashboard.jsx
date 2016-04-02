import React from 'react';
import Sidebar from './Sidebar.jsx';
import CreateTag from './CreateTag.jsx';
import Helmet from "react-helmet";


export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Hiren-Bookmark: Dashboard"
                    link={[
                    {"rel": "stylesheet", "href": "/css/bootstrap.min.css"},
                    {"rel": "stylesheet", "href": "/css/simple-sidebar.css"},
                    {"rel": "stylesheet", "href": "/css/font-awesome.min.css"}
                ]}
                />

            <div id="wrapper">
                <Sidebar />
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12"> <CreateTag />
                            </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>
        )
    }
}