const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
            },
    age: {
        type: Number,
        required:true
    },
    position: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },



    passing: {
        type: Number,
        required: true
    },
    receiving: {
        type: Number, 
        required: true
    },
    rushing: {
        type: Number, 
        required: true
    },
    fumbles: {
        type: Number,
        required: true
    },
    tackles: {
        type: Number,
        required: true
    },
    interceptions: {
        type: Number,
        required: true

    },
    // fieldGoals: {
    //     type: Number, 
    //     required: true
    // },
    // kickoffs: {
    //     type: Number, 
    //     required: true
    // },
    // punting: {
    //     type: Number,
    //     required: true
    // },
    // puntreturns: {
    //     type: Number,
    //     required: true

    // },
    teamId: {
        ref: 'team',
        type: Schema.Types.ObjectId
    }
    
    
})


const Player = mongoose.model("Player", playerSchema)

module.exports = Player