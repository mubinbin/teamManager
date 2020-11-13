const Player = require('../models/player.model');

module.exports.allPlayers = (req, res) => {
    Player.find()
    .then(allPlayers => res.json(allPlayers))
    .catch(err => res.json({message:"Something went wrong", error: err}));
};

module.exports.onePlayer = (req, res) => {
    Player.findById({_id: req.params.id})
    .then(onePlayer => res.json(onePlayer))
    .catch(err => res.json({message:"Something went wrong", error: err}));
};

module.exports.createPlayer = (req, res) => {
    Player.exists({name: req.body.name})
    .then(playerExist => {
        if(playerExist){
            return Promise.reject({errors: {name: {message: "Player has already existed"}}});
        }else{
            return Player.create(req.body);
        }
    })
    .then(newPlayer => res.json(newPlayer))
    .catch(err => res.json({message:"Something went wrong", error: err}));
};

module.exports.updateOnePlayer = (req, res) => {
    Player.update({_id: req.params.id},
        {$set: {
            name: req.body.name,
            position: req.body.position,
            playStatus: req.body.playStatus
        }},
        {runValidators: true})
    .then(updatedPlayer => res.json(updatedPlayer))
    .catch(err => res.json({message:"Something went wrong", error: err}));
};

module.exports.deleteOnePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json({message:"Something went wrong", error: err}));
};

