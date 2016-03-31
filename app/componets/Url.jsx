import React from 'react';
import Helmet from "react-helmet";
import {Link} from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Sidebar from './Sidebar.jsx';
import Urls from '../ajax/Urls.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
            loaded: false
        };
    }

    componentDidMount() {
        Urls.getUrls(this.props.params.tag_id).done(urls => {

            this.setState({urls: urls || [], loaded: true});
        });


    }

    render() {
        return (
            <div id="wrapper">
                <Helmet
                    title="Hiren-Bookmark: Dashboard"
                    link={[
                    {"rel": "stylesheet", "href": "/css/bootstrap.min.css"},
                    {"rel": "stylesheet", "href": "/css/simple-sidebar.css"},
                    {"rel": "stylesheet", "href": "/css/font-awesome.min.css"},
                    {"rel": "stylesheet", "href": "/css/react-bootstrap-table.min.css"}
                ]}
                />
                <Sidebar/>
                    
                    
                     <BootstrapTable data={this.state.urls} striped={true} hover={true} bordered={true}>
                     <TableHeaderColumn dataField="title" isKey={true} dataAlign="center" dataSort={true}>{this.state.urls['title']} Title</TableHeaderColumn>
                       <TableHeaderColumn dataField="url" dataSort={true}> <a href={this.state.urls['url']}>{this.state.urls['url']}</a> Link</TableHeaderColumn>
                      <TableHeaderColumn dataField="date" >{this.state.urls['date']} Date Added</TableHeaderColumn>
                     </BootstrapTable>

                    
                
            </div>
        )
    }
}