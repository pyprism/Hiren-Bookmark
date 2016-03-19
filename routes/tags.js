/**
 * Created by prism on 3/15/16.
 */
var express = require('express');

module.exports = function(Tags, Urls) {
    var router = express.Router();

    //route for get all tags
    router.route('/')
    .get(function(req, res) {
        Tags.find().then(function(tags) {
            res.status(201).send({ tags: tags});
        });

    })
    .post(function(req, res) {   //create new tag
        Tags.findOne({name: req.body.tag}).then(function(result) {
           if(result) return res.status(409).send({error: 'Duplicate tag'});
            var tag = new Tags({name: req.body.tag});
            tag.save();
            res.status(201).send({message: "created"});
        });

    });

    router.route('/:id')
    .get(function(req, res) {  // get single tag by id
        Tags.findById(req.params.id).then(function(result) {
            if(!result) return res.status(404).send({error: 'tag not found'});
            res.status(200).send({tag: result});
        });
    })
    .put(function(req, res) { //update single tag
       Tags.findById(req.params.id).then(function(result) {
           if(!result) return res.status(404).send({error: 'tag not found'});
           console.log(result);
           console.log(req.body.name);
           result.name = req.body.name;
           result.save();
           res.status(204).send({message: 'tag updated'});
       })
    })
    .delete(function(req, res) {  //delete single tag
        Tags.remove({_id: req.params.id}).then(function(result) {
            if(!result) return res.status(404).send({error: 'tag not found'});
            res.status(202).send({message: "tag successfully deleted"});
        });
    });

    return router;
};