import mongoose from "mongoose";
const Schema = mongoose.Schema;
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
var CASchema = new Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    ref_code: {
        type: String,
    },
    norefcode: {
        type: Number,
        default: 0,
    }
});

CASchema.pre(/^find/, async function (next) {
	this.populate({
		path: "userID",
	});
	next();
});
const caModel = mongoose.models.Ca || mongoose.model("Ca", CASchema) 
export default caModel;