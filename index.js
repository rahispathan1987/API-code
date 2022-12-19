const express = require('express');
const app = express();
const port = 3000;

// febonacci api
app.get('/febonacci', (req, res) => {
    if (req.query?.number) {
        return res.status(200).send({'series': Math.round(Math.pow((Math.sqrt(5) + 1) / 2, req.query?.number) / Math.sqrt(5))});
    } else {
        return res.status(404).send({'message': 'Please provide number!'})
    }
});

// Starting server
app.listen(port, function (err) {
    if (err) {
        console.log("Error while starting server");
    }
    else {
        console.log("Server has been started at " + port);
    }
})