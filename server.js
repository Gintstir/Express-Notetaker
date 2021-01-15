const express = require("express");
const path = require("path");
const fs = require("fs")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//code3 here:
//GET routes:
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
// });


app.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});




  //=========================================================================
app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});
