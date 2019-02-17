const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_FACTOR = 10

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

userSchema.pre('save', async function () {
    const user = this
    if (user.isModified()) {
      user.password = await bcrypt.hash(user.password, SALT_FACTOR)
    }
});

/*
userSchema.methods.checkPassword = function (guess, done) {
  bcrypt.compare(guess, this.password, function (err, isMatch) {
      done(err, isMatch);
  });
};

userSchema.methods.checkPassword = async function (guess) {
   return await bcrypt.compare(guess, this.password)
}


userSchema.statics.someMethod = function () {

};

userSchema.query.byUsername = function(username) {

};

userSchema.virtual('something')
    .get(function () {

    })
    .set(function (value) {

});

User.find().byUsername(username).exec((err, users) => {
)
 */

let User = mongoose.model('User', userSchema);
module.exports = User;
