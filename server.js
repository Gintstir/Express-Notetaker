const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require('./routes/apiroutes');

//================================================================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//================================================================

//this is the middleware- I was having an issue correctly loading the css and I was not linking the 'public' folder.  So got rid of the parent 'Develop' directory and moved
//public to the root- this seems to have solved the issue.  
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.json());

//===============================================================

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//================================================================

app.listen(PORT, () => {
console.log(`API server now on port ${PORT}!`);
});
