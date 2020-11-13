const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter the player's name"],
            minlength: [2, "Player's name needs to be at least 2 characters"]
        },

        position:{
            type: String,
        },

        playStatus: ["tbd", "tbd", "tbd"]

    },
    {timestamps: true}
);

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;