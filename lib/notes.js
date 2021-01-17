const path = require('path');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

let notes = require('../db/db.json');

const saveNote = (note) => {
	const newNote = {
		title : note.title,
		text  : note.text,
		id    : uuidv4()
	};
	notes.push(newNote);
	// write to .json file (add to database)
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(notes, null, 2)
	);
};

//====================================================

module.exports = {
	saveNote	
};