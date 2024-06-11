/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users)
    } catch (error) {
        return res.serverError(error)
    }
  },

  create: async (req, res) => {
    try {
        const user = await User.create(req.body).fetch();
        return res.json(user)
    } catch {
        return res.serverError(error)
    }
  }
};

