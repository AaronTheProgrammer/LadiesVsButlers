const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const serveStatic = require('serve-static');
const app = express();


app.use(serveStatic(path.join(__dirname, 'views')));
app.get('/', (req, res) => {
    res.sendFile(__dirname  + '/views/LadiesVsButlersSite.html');
   //res.sendFile("http://localhost:8080/views/LadiesVsButlersSite.html");
});





app.listen(port, () => console.log(`Listening on port ${port}`));