import React from 'react';
import Tags from '../ajax/Tags.jsx';
import Sidebar from './Sidebar.jsx';
import Urls from '../ajax/Urls.jsx';
import ReactDOM from 'react-dom';

//TODO component for  display creation date, number of url,

export default class TagUtils extends React.Component {
    deleteTag = () => {
        Tags.deleteTag(this.props.tag).then(function(response){
           if(response.message === 'tag successfully deleted')
               window.location.href = "/dashboard";
                //Sidebar.fetchData(); //TODO Handle page refresh
        });
    }

    newURL = (e) => {
        e.preventDefault();
        Urls.createUrl(this.props.tag, ReactDOM.findDOMNode(this.refs.new_url).value);
        //TODO state change
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={this.newURL.bind(this)}>
                            <div className="form-group">
                                <label>Add New URL</label>
                                <input type="text" className="form-control" required ref="new_url" placeholder="Add New URL" />
                            </div>
                            <button type="submit" className="btn btn-default"><i className="fa fa-url"> Save</i></button>
                        </form>
                    </div>
            <div className="col-xs-6 col-md-4">
                <button type="button" className="btn btn-danger" onClick={this.deleteTag}><i className="fa fa-trash"> Delete</i></button>
            </div>
            </div>
            </div>
        )
    }
}