const notes = require('./db/db.json');

const express = require("express");
const path = require("path");
const fs = require("fs")

const app = express();
const PORT = process.env.PORT || 3001;


//this is the middleware- I was having an issue correctly loading the css and I was not linking the 'public' folder.  So got rid of the parent 'Develop' directory and moved
//public to the root- this seems to have solved the issue.  
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


//============================================================

app.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
});


app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
});


//===========================================================
app.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


//=========================================================================
app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});
