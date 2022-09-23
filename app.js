const express = require('express');

const app = express();

const PORT = 5000

app.get('/', (req,res) => {
    res.send("Hello Workld")
})

app.listen(PORT, () => {
    console.log("Server running at PORT :- " + PORT);
})