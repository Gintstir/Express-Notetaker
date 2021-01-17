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
    
    saveNote(newNote);
    res.json(notes);
});

//BONUS:
//DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the db.json file, remove the note 
//with the given id property, and then rewrite the notes to the db.json file.

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