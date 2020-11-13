const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/team_manager_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Connected to database successfully!'))
    .catch(err => console.log("No, there are errors" + err));