const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get("/api/players", PlayerController.allPlayers);
    app.get("/api/players/:id", PlayerController.onePlayer);
    app.put("/api/players/:id", PlayerController.updateOnePlayer);
    app.delete("/api/players/:id", PlayerController.deleteOnePlayer);
    app.post("/api/players/new", PlayerController.createPlayer);
};