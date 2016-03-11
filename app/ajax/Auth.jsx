export default class Auth {
    constructor(url) {
        this.request = new Request(url, {
            //method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            })
        })
    }

    login(username, password) {
        fetch(this.request).then(function(response) {
            console.log(response);
            if(response) {
                sessionStorage.setItem('token', response.token);
                console.log(response.body.text);
            }
        })
    }

    registration(username, password) {
        fetch(this.request).then(function(response) {
            if(response) return true;
        })
    }


}