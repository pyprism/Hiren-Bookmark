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
}