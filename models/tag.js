/**
 * Created by prism on 3/10/16.
 */

module.exports = function(mongoose) {
    var TagSchema = mongoose.Schema({
        name: String,
        urlId:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Url'
        },
        date: { type: Date, default: Date.now }
    });

    return mongoose.model('Tag', TagSchema);
 
};