import React from 'react';
import {Link} from 'react-router';
import Tags from '../ajax/Tags.jsx';
require("../../public/css/simple-sidebar.css");


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: {},
            loaded: false
        };
    }

    componentDidMount() {
        Tags.getTags().done((response) => {
            this.setState({tags: response.tags || [], loaded: true});
        });
    }

    render() {

        let items = this.state.loaded? (this.state.tags).map(tag => <li key={tag.id}>
            <Link to="" params={ {id: tag.id}}> {this.state.tags[tag.id].name} </Link>
        </li>): [<li key="loading"> <em>Loading......</em> </li>];

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