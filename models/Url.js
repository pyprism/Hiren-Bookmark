/**
 * Created by prism on 3/10/16.
 */

module.exports = function(mongoose) {
    var UrlSchema = mongoose.Schema({
        title: String,
        url: String,
        clicked: {
            type: Number,
            default: 0
        },
        date: { type: Date, default: Date.now }
    });

    return mongoose.model('Url', UrlSchema);

};