import { Schema, model, ObjectId } from "mongoose"

const User = new Schema({
   fname: {type: String, required: true},
   lname: {type: String, required: true},
   login: {type: String, required: true, unique: true},
   password: {type: String, required: true},
   mobile: {type: String, required: true},
   role: [{type: ObjectId, ref: 'Roles'}]
})

module.exports = model('User', User)