import $ from 'jquery';

export default class Auth {
    static login(url, username, password) {
        $.ajax({
            method: 'POST',
            url: url,
            data: {'username': username, 'password': password},
            success: function(response) {
                if(response.token) {
                    sessionStorage.setItem('token', response.token);
                    window.location.href = "/dashboard";
                }
            },
            error: function(jqXHR, exception) {
                alert(jqXHR.responseText);
            }
        });
    }

    static logout(){
        sessionStorage.removeItem('token');
        window.location.href = "/";
    }

    registration(url, username, password) {
        $.ajax({
            method: 'POST',
            url: url,
            data: {'username': username, 'password': password},
            success: function(response) {
                window.location.href = "/";
            },
            error: function(jqXHR, exception) {
                alert(jqXHR.responseText);
            }
        });
    }


}