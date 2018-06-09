'use strict';

module.exports = (app) => {
  const factoryList = require('../controllers/factoryListController');

    app.route('/factories')
    .get(factoryList.list_all_factories)
    .post(factoryList.create_new_factory);
    // .update(factoryList.update_a_factory)
    // .delete(factoryList.delete_a_factory)

    app.route('factories/:factoryId')
    .get(factoryList.read_a_factory)

};

// const express = require('express');
// var router = express.Router();

// // GET Index Page
// router.get('/', (req, res, next) => {
//   res.send('Express REST API test')
// });

// module.exports = router;