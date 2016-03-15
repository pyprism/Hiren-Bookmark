/**
 * Created by prism on 3/9/16.
 */

module.exports = function(bookshelf) {
       var Account = bookshelf.Model.extend({
           tableName: 'Account',
           hasTimestamps: true
       });

    return Account;
};
