import React from 'react';
import Helmet from "react-helmet";
import {Link} from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Sidebar from './Sidebar.jsx';
import Urls from '../ajax/Urls.jsx';
import TagUtils from './TagUtils.jsx';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate (prevProps) {
        let oldId = prevProps.params.tag_id;
        let newId = this.props.params.tag_id;
        if (newId !== oldId)
            this.fetchData();
    }

    fetchData() {
        Urls.getUrls(this.props.params.tag_id).done(urls => {

            this.setState({urls: urls || [], loaded: true});
        });
    }

    linkCellFormat(cell, row) {
        return  '<a href=" ' + cell + ' " target="_blank">' + cell +'</a> ';
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
                <TagUtils  tag={this.props.params.tag_id}/>

                <BootstrapTable data={this.state.urls} striped={true} hover={true} bordered={true} search={true} multiColumnSearch={true}>
                    <TableHeaderColumn dataField="title" isKey={true} dataAlign="center" dataSort={true}>{this.state.urls['title']} Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="url" dataSort={true} dataFormat={this.linkCellFormat}> {this.state.urls['url']} Link</TableHeaderColumn>
                    <TableHeaderColumn dataField="date" >{this.state.urls['date']} Date Added</TableHeaderColumn>
                </BootstrapTable>



            </div>
        )
    }
}