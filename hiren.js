/**
 * Created by prism on 3/7/16.
 */
var express = require('express'),
    Sequelize = require('sequelize');

try {
    var config = require('./config.local.json');
} catch(e) {
    var config = require('./config.json');
}

var sequelize = new Sequelize('postgres://' + config.db_user + ':' + config.db_password + '@localhost:5432/' + config.db_name);
var Account = require('./models/Account')(sequelize);
var auth = require('./routes/auth');
var port = process.env.PORT || 3000;

express()
    .enable('trust proxy')
    .set('view engine', 'ejs')
    .use(require('helmet')())
    .use(express.static('./public'))
    .use(require('body-parser').json())
    .use(require('cookie-parser')())
    .use(require('serve-favicon')(__dirname + '/public/favicon.ico'))
    .use(require('express-session')({
        resave: false,
        saveUninitialized: true,
        secret: config.secret
    }))
    //.use(require('./accounts'))
    .get('*', function (req, res) {
        res.render('index', {
           // user: JSON.stringify(req.session.user || null)
           user: null
        });
    })
    .listen(port, function(){
        console.log('App is running on port: ' + port);
    });