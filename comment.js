const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let comments = [];

app.get('/comments', (req, res) => {
    res.render('index', { comments });
});

app.post('/add-comment', (req, res) => {
    const name = req.body.name;
    const commentText = req.body.comment;
    const comment = { name, comment: commentText };
    comments.push(comment);
    res.redirect('/comments');
});

app.listen(3000, () => {
    console.log(`Server is running `);
});
