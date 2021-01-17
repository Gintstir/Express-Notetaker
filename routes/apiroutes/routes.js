const router = require('express').Router();

const { saveNote, deleteNote } = require('../../lib/notes');

const notes = require('../../db/db.json');

const fs = require('fs');

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

//BONUS:
//Delete a note from the notes array based on ID
router.delete("/notes/:id", (req, res) => {
    //find the id of the note that is going to be deleted
    let deleteNote = notes.findIndex((item) => item.id === req.params.id);
    //remove the note from the notes array
    notes.splice(deleteNote, 1);
  
    //write the updated array to db.json
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), function (
      err
    ) {
      if (err) throw err;
    });
    res.json({ deletion: "Note Deleted!" });
  });


//==============================================

module.exports = router;