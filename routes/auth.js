/**
 * Created by prism on 3/9/16.
 */
var express = require('express'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');


module.exports = function(Account, config){
	var router = express.Router();

    // route for registration
	router.route('/registration')
	.post(function(req, res) {
        Account.count().then(function(c) {

            if(c == 1) return res.status(500).send({error: 'account already existed'});

            var salt = bcrypt.genSaltSync(10);
            Account.create({username:req.body.username, password:bcrypt.hashSync(req.body.password, salt)}).then(function() {
                res.status(201).send({ message: 'account created'});
        });

        });

	});

    // route for login
    router.route('/login')
    .post(function(req, res) {
        Account.findOne({ where: { username: req.body.username}, raw: true}).then(function(user) {
            if(user) {
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    var token = jwt.sign(user, config.secret);
                    return res.status(200).send({ token: token});
                }
                return res.status(500).send({error: 'username/password is not correct'});
            }
            res.status(500).send({error: 'username/password is not correct'});
        })
    });

	return router;
};