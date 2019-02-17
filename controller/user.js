const User = require('../models/user')

module.exports = {
  create: async (ctx) => {
    const { username, email, password } = ctx.request.body
    if (await User.findOne({ username })) {
      ctx.throw(400, "username already exists")
    }
    if (await User.findOne({ email })) {
      ctx.throw(400, "email has been registered")
    }
    const newUser = new User({
      username,
      email,
      password
    });
    await newUser.save();
    ctx.body = {
      username,
      password
    };
  }
}
