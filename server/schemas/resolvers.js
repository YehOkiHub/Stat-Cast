const {User} = require("./../models/index");
const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        }
    },
    Mutation: {
        addUser: async (userdata) => {
            return await User.create(userdata)
        }
    }
}



module.exports = resolvers