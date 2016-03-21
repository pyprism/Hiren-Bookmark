/**
 * Created by prism on 3/20/16.
 */

var express = require('express'),
    validator = require('validator');

module.exports = function(Tags, Urls) {
    var router = express.Router();

    router.route('/')
        .get(function(req, res) {
            Urls.find().then(function(urls) {
                res.status(200).send({ Urls: urls});
            });

        })
        .post(function(req, res) {
            if(!validator.isURL(req.body.url)) return res.status(500).send({message: 'validation error'});
            Tags.findById(req.body.tag_id).then(function(result) {
                if(result) {
                    var url = new Urls({title: req.body.title, url: req.body.url});
                    url.save();
                    result.urlId.push(url._id);
                    result.save();
                    res.status(201).send({message: 'url created'});
                }
            });
        });

    router.route('/tag/:tag_id')
    .get(function(req, res) {
        Tags.findById(req.params.tag_id).then(function(result) {
        	
        	var urls = [];
        	for(var _id of result.urlId){
        		Urls.findById(_id).then(function(url) {
        			urls.push(url);
        		})
        		return res.send(urls);
        	}
            
        }).catch(function(err){
          return res.status(404).send({error: err});
        });
    });

    return router;
};