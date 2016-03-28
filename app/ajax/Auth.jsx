import $ from 'jquery';

export default class Auth {
    static login(url, username, password) {
        $.ajax({
            method: 'POST',
            url: url,
            data: {'username': username, 'password': password},
            complete: function(response) {
                if(response.token) {
                    sessionStorage.setItem('token', response.token);
                    window.location.href = "/dashboard";
                }
            },
            error: function(jqXHR, exception) {
                alert(jqXHR.responseText);
            }
        })
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
           /* succes: function( data, jqXHR, textStatus ) {
                console.log(data, jqXHR, textStatus);
                if(response.token) {
                    sessionStorage.setItem('token', response.token);
                    window.location.href = "/dashboard";
                }
            },*/
            error: function(jqXHR, exception) {
                alert(jqXHR.responseText);
            }
        }).done(function(response){
            console.log(response);
        })
    }


}