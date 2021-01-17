const router = require('express').Router();

const { saveNote, deleteNote } = require('../../lib/notes');

const notes = require('../../db/db.json');

//==========================================

router.get('/notes', (req, res) => {
      
    res.json(notes);
});

router.post('/notes', (req, res) => {    
    
    req.body.id = notes.length.toString();
    const newNote = req.body;
    console.log(newNote);
    saveNote(newNote);
    res.json(notes);
});

router.delete('/notes', (req, res) => {
    notes = deleteNote(req.params.id);
    res.json(notes);
})

// router.post("/notes", (req, res) => {
//     const notes = JSON.parse(
//       fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"), "utf8")
//     );
//     req.body.id = notes.length.toString();
//     const note = req.body;
//     notes.push(note);
//     fs.writeFileSync(
//       path.join(__dirname, "../develop/db/db.json"),
//       JSON.stringify(notes, null, 2)
//     );
//     res.json(notes);
//   });

//==============================================

module.exports = router;