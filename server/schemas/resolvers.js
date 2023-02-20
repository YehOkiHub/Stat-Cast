const {User} = require("./../models/index");
const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        }
        
    },
    Mutation: {
        addUser: async (parent, args) => {
            return await User.create(args)
            
        },
        auth: async (parent, args) => {            
            let user = await User.findOne({
                username: args.username, password: args.password
            })
            
            return user
    
        }
    },
    





    
}



module.exports = resolvers