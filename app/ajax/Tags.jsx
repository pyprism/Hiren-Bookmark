import $ from 'jquery';

export default class Tags {

    static getTags() {
        return $.ajax({
            method: 'GET',
            url: '/tags/',
            'beforeSend': function(xhr) {
                if (sessionStorage.getItem('token')) {
                    xhr.setRequestHeader('x-access-token', sessionStorage.getItem('token'));
                }}
        }).fail(function(err) {
            window.location.href = "/";
            //alert(err.responseJSON.error);

        });
    }

    static createTag(name) {
        return $.ajax({
            method: 'POST',
            url: '/tags/',
            data: {tag: name},
            'beforeSend': function(xhr) {
                if (sessionStorage.getItem('token')) {
                    xhr.setRequestHeader('x-access-token', sessionStorage.getItem('token'));
                }}
        }).done(function(response){
            console.log(response);
            location.reload(true); //TODO handle page refresh via state
        }).fail(function(err) {
            console.log(err);
            alert('Duplicate tag');
            //window.location.href = "/";
            //alert(err.responseJSON.error);

        });
    }
}