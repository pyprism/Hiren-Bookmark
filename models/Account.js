/**
 * Created by prism on 3/9/16.
 */
var Sequelize = require('sequelize');

module.exports = function(sequelize) {
        sequelize.define('account', {
            username: Sequelize.STRING,
            password: Sequelize.STRING,
        })
};
