//require statements will read the index.js files in each of the directories indicated
const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require('./routes/apiroutes');

//================================================================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//================================================================

//this is the middleware- I was having an issue correctly loading 
//the css and I was not linking the 'public' folder.  So got rid of the parent 'Develop' directory and moved
//public to the root- this seems to have solved the issue.  
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.json());

//===============================================================
/*This is our way of telling the server that any time a client navigates to <ourhost>/api, 
the app will use the router we set up in apiRoutes. If / is the endpoint, then the router
 will serve back our HTML routes.
*/
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//================================================================

app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});
