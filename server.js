const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let likeCount = 0;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/like', (req, res) => {
    likeCount++;
    res.json({ likeCount });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
