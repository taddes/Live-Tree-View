'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FactorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },
  selectedNumber: {
    type: Number,
    required: true
  },
  numbers: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model('Factories', FactorySchema);