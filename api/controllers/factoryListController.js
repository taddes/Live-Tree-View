'use strict'

const mongoose = require('mongoose');
Factory = mongoose.model('Factories');

exports.list_all_factories = (req, res) => {
  Factory.find({}, (err, factory) => {
    if(err)
    res.send(err);
    res.json(factory)
  });
}