/**
 * Created by prism on 3/9/16.
 */

module.exports = function(mongoose) {
	var AccountSchema = mongoose.Schema({
		username: String,
		password: String
	});

	return mongoose.model('Account', AccountSchema);
};
