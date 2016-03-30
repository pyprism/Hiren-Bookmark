import $ from 'jquery';

export default class Urls {

    static getUrls(tag_id) {
        return $.ajax({
            method: 'GET',
            url: '/urls/tag/' + tag_id,
            cache: false,
            'beforeSend': function(xhr) {
                if (sessionStorage.getItem('token')) {
                    xhr.setRequestHeader('x-access-token', sessionStorage.getItem('token'));
                }}
        }).fail(function(err) {
            window.location.href = "/";
        });

    }
}