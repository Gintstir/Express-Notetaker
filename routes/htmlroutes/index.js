//html routes

const path = require('path');

const router = require('express').Router();

//=====================================================================

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
//this wildcard route isnt necessary according to chase but returns index.html no matter what the user types after the address.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//=======================================================================
//export the router
module.exports = router;

