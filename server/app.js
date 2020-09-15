var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');

var usersController = require('./controllers/users');
var projectsController = require('./controllers/projects');
var imagesController = require('./controllers/images');
var materialsController = require('./controllers/materials');
var notesController = require('./controllers/notes');
var yarnsController = require('./controllers/yarns');
var needlesController = require('./controllers/needles'); 

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animalDevelopmentDB';
var port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(err.stack);
        process.exit(1);
    }
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
});

// Create Express app
var app = express();
// Parse requests of content-type 'application/json'
app.use(bodyParser.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors());
app.use(cors());

// Import routes
app.get('/api', function(req, res, next) {
    res.json({'message': 'Welcome to your DIT341 backend ExpressJS project!'});
});

/* Negin's contribution
//POST (create)
var notes = [];
app.post('/notes', function(req, res) {
    var new_note = {
        "_id": notes.length, 
        "date_added": req.body.date_added,
        "content": req.body.content,
        "project_id": req.body.project_id
    }
    notes.push(new_note);
    res.json(new_note);
});

var yarns = [];
app.post('/yarns', function(req, res) {
    var new_yarn = {
        "_id": yarns.length, 
        "brand": req.body.brand,
        "color": req.body.color,
        "weight": req.body.weight,
        "fiber": req.body.fiber,
        "material_id": req.body.material_id
    }
    notes.push(new_yarn);
    res.json(new_yarn);
});

var needles = [];
app.post('/needles', function(req, res) {
    var new_needle = {
        "_id": needles.length, 
        "size": req.body.size,
        "material_id": req.body.material_id
    }
    notes.push(new_needle);
    res.json(new_needle);
});

//GET (read)
app.get('api/notes/:id', function(req, res) {
    res.json(notes[req.params.id]);
});

app.get('api/yarns/:id', function(req, res) {
    res.json(yarns[req.params.id]);
});

app.get('api/needles/:id', function(req, res) {
    res.json(needles[req.params.id]);
});

//PUT (update)
app.put('/notes/:id', function(req, res) {
    var id = req.params.id;
    var updated_note = {
        "_id": id, 
        "date_added": req.body.date_added,
        "content": req.body.content,
        "project_id": req.body.project_id
    }
    notes[id] = updated_note;
    res.json(updated_note);
});

app.put('/yarns/:id', function(req, res) {
    var id = req.params.id;
    var updated_yarn = {
        "_id": id, 
        "brand": req.body.brand,
        "color": req.body.color,
        "weight": req.body.weight,
        "fiber": req.body.fiber,
        "material_id": req.body.material_id
    }
    yarns[id] = updated_yarn;
    res.json(updated_yarn);
});

app.put('/needles/:id', function(req, res) {
    var id = req.params.id;
    var updated_needle = {
        "_id": id, 
        "size": req.body.size,
        "material_id": req.body.material_id
    }
    needles[id] = updated_needle;
    res.json(updated_needle);
});

//DELETE (delete)
app.delete('/notes/:id', function(req, res) {
    var id = req.params.id;
    var notes = notes[id];
    delete notes[id];
    res.json(note);
});

app.delete('/yarns/:id', function(req, res) {
    var id = req.params.id;
    var yarns = yarns[id];
    delete yarns[id];
    res.json(yarn);
});

app.delete('/needles/:id', function(req, res) {
    var id = req.params.id;
    var needles = needles[id];
    delete needles[id];
    res.json(needle);
}); */

//test from supervision
//app.get('/api/abc', function(req, res, next) {
    //console.log('FIRST abc BEFORE next');
    //next();
    //console.log('FIRST abc AFTER next');
    //res.json({'message': 'FIRST abc response '});
//});

//app.get('/api/abc', function(req, res) {
    //console.log('SECOND abc');
   // res.json({'message': 'SECOND abc response'});
//});

app.delete;

app.use(usersController);
app.use(projectsController);
app.use(notesController);
app.use(yarnsController);
app.use(needlesController);

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});


// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));

// Error handler (i.e., when exception is thrown) must be registered last
var env = app.get('env');
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        err_res['error'] = err;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
    console.log(`Frontend (production): http://localhost:${port}/`);
});

module.exports = app;
