import React from 'react';
import Sidebar from './Sidebar.jsx';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
            </div>
        )
    }
}