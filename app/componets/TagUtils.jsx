import React from 'react';
import Tags from '../ajax/Tags.jsx';
import ReactDOM from 'react-dom';

//TODO component for delete tags, display creation date, number of url, add new urls

export default class TagUtils extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteTag() {
        console.log(props.tag_id);
    }

    render() {
        return (
            <div className="col-xs-6 col-md-4">
                <button type="button" className="btn btn-danger" onClick={this.deleteTag}><i className="fa fa-trash"> Delete</i></button>
            </div>
        )
    }
}