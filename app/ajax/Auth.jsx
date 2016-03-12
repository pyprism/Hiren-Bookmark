import $ from 'jquery';

export default class Auth {
    static login(url, username, password) {
        $.ajax({
            method: 'POST',
            url: url,
            data: {'username': username, 'password': password}
        }).done(function(response) {
            if(response.token) {
                sessionStorage.setItem('token', response.token);
                window.location.href = "/dashboard";
            }
        }).fail(function(jqXHR, response) {
           alert('username/password is not correct !');
        });
    }

    static logout(){
        sessionStorage.removeItem('token');
        window.location.href = "/";
    }

    registration(username, password) {
        fetch(this.request).then(function(response) {
            if(response) return true;
        })
    }


}