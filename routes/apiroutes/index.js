// using apiRoutes/index.js as a central hub for all routing functions we might add to the application

const router = require('express').Router();
const routes = require('./routes')

router.use(routes)

module.exports = router