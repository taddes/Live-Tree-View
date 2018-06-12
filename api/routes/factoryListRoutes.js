'use strict';

module.exports = (app) => {
  const factoryList = require('../controllers/factoryListController');

    app.route('/factories')
    .get(factoryList.list_all_factories)
    .post(factoryList.create_new_factory);

    app.route('/factories/:factoryId')
    .get(factoryList.read_a_factory)
    .delete(factoryList.delete_a_factory);

    app.route('/factories/:factoryId')
    .put(factoryList.update_a_factory);

};

