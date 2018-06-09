'use strict'

const mongoose = require('mongoose');
const Factory = mongoose.model('Factories');

exports.list_all_factories = (req, res) => {
  Factory.find({}, (err, factory) => {
    if(err)
    res.send(err);
    res.json(factory);
  });
};

exports.create_new_factory = (req, res) => {
  let new_factory = new Factory(req.body);
  new_factory.save((err, factory) => {
    if(err)
    res.send(err);
    res.json(factory);  
  });
};

exports.read_a_factory = (req, res) => {
Factory.findById(req.params.factoryId, (err, factory) => {
  if(err)
    res.send(err);
    res.json(factory); 
  });
};

exports.delete_a_factory = (req, res) => {
  Factory.remove({_id: req.params.factoryId
  }, (err, factory) => {
    if(err)
    res.send(err);
    res.json({factory: 'successfully deleted'})
  })
}