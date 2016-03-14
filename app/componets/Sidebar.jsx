import React from 'react';


export default class Sidebar extends React.Component {
    state = {
        tags: {},
        loaded: false
    }
    render() {
        return (
            <div>
                 <!-- Sidebar -->
                    <div id="sidebar-wrapper">
                        <ul className="sidebar-nav">
                            <li className="sidebar-brand">
                                <a href="#">
                                    Start Bootstrap
                                </a>
                            </li>
                            <li>
                                <a href="#">Dashboard</a>
                            </li>

                        </ul>
                    </div>
                    <!-- /#sidebar-wrapper -->
            </div>
        )
    }
}