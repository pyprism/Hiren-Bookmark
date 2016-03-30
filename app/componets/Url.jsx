import React from 'react';
import Helmet from "react-helmet";
import {Link} from 'react-router';
import Sidebar from './Sidebar.jsx';
import Urls from '../ajax/Urls.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: {},
            loaded: false
        };
    }

    componentDidMount() {
        Urls.getUrls(this.props.params.tag_id).done(urls => {
            console.log(urls);
            this.setState({urls: urls || [], loaded: true});
        })

    }

    render() {

        let items = this.state.loaded? (this.state.urls).map(url =>
            <tbody>
                <tr key={url._id}>
                <td>{url.name}</td>
                <td>{url.url}</td>
                <td>{url.date}</td>
                </tr>
            </tbody>
        ): [<li key="loading"> <em>Loading......</em> </li>];

        return (
            <div id="wrapper">
                <Helmet
                    title="Hiren-Bookmark: Dashboard"
                    link={[
                    {"rel": "stylesheet", "href": "/css/bootstrap.min.css"},
                    {"rel": "stylesheet", "href": "/css/simple-sidebar.css"},
                    {"rel": "stylesheet", "href": "/css/font-awesome.min.css"}
                ]}
                />
                <Sidebar/>
                
                
                {
                    <div class='container'>
                    <thead>
                <tr>
                <th>Title</th>
                <th>Url</th>
                <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    this.state.loaded? (this.state.urls).map(url =>
                    <table className="table table-striped">
                
                <tr>
                <td>{url.name}</td>
                <td>{url.url}</td>
                <td>{url.date}</td>
                </tr>
                </tbody>
             </table>

        ) : [<li key="loading"> <em>Loading......</em> </li>]
              </div>
                }
               
               
                
            </div>
        )
    }
}