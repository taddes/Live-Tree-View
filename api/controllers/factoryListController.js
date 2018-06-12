'use strict'

const mongoose = require('mongoose');
const Factory = mongoose.model('Factories');
const Pusher = require('pusher')

const pusher = new Pusher({
  appId:'540191',
  key:'84bfa7245bc98cd0b907',
  secret:'8de2b32b3cfec3ca1b6e',
  cluster:'mt1'
});


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
    pusher.trigger('factories', 'factory_added', {factory: req.body})
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
  });
};

exports.update_a_factory = (req, res) => {
  let updated_factory = req.body
  let id = req.params.factoryId
  console.log(req.body)
  console.log('update!')
  console.log(req.params.factoryId)
  Factory.findByIdAndUpdate(id, updated_factory, (err, factory) => {
    if(err)
    res.send(err);
    res.json(factory);
    console.log('update!')
    console.log(req.params.factoryId)
  });
};