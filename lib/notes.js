const path = require('path');
const fs = require('fs');

//create a uuid using CommonJS syntax 
const { v4: uuidv4 } = require('uuid');
//or Es6 Module syntax:
// import { v4 as uuidv4 } from 'uuid';

let notes = require('../db/db.json');

const saveNote = (note) => {
	const newNote = {
		title : note.title,
		text  : note.text,
		id    : uuidv4()
	};
	notes.push(newNote);
	
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(notes, null, 2)
	);
};

//====================================================
//export the saveNote function
module.exports = {
	saveNote	
};