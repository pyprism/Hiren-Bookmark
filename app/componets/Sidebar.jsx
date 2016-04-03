import React from 'react';
import {Link} from 'react-router';
import Tags from '../ajax/Tags.jsx';



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

    //componentDidUpdate() {
    //    this.fetchData();
   // }

    fetchData() {
        Tags.getTags().done((response) => {
            this.setState({tags: response.tags || [], loaded: true});
        });
    }

    render() {

        let items = this.state.loaded? (this.state.tags).map(tag => <li key={tag._id}>
            <Link to={"/dashboard/tags/" + tag._id} params={ {id: tag._id}} activeStyle={{ color: '#315561'}}>
                <i className="fa fa-tag"> {tag.name} </i>
            </Link>
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
                                <Link to="/dashboard" activeStyle={{ color: '#315561'}}> <i className="fa fa-tachometer"> Dashboard</i> </Link>
                            </li>
                            {items}
                        </ul>
                    </div>
                {/*-- /#sidebar-wrapper  --*/}
            </div>
        )
    }
}