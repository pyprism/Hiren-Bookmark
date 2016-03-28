import React from 'react';
require("../../public/css/simple-sidebar.css");


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: {},
            loaded: false
        };
    }

    render() {
        return (
            <div>
                {/*-- Sidebar --*/}
                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a href="#">
                                    <i className="fa fa-heartbeat"> Hiren</i>
                                </a>
                            </li>
                            <li>
                                <a href="#">Dashboard</a>
                            </li>

                        </ul>
                    </div>
                {/*-- /#sidebar-wrapper  --*/}
            </div>
        )
    }
}