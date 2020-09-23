var express = require('express');
var router = express.Router();

var Project = require('../models/project.js');
var User = require('../models/user.js');

// CREATE a project document
router.post('/api/projects', function(req, res, next) {
    var project = new Project(req.body);
    project.save(function(err, project) {
        if (err) { return next(err); }
        return res.status(201).json(project);
    });   
});       

// CREATE a project for a user
router.post('/api/projects/:user_id/projects', function(req, res) {

    var project = new Project(req.body);   
    project.save();

    var user_id = req.params.user_id;
    const update = {$push: { projects: project._id }}; 
    User.findOneAndUpdate({_id: user_id}, update, {new: true}, function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        return res.json(project);
    });
}); 

// READ all projects in the project collection
router.get('/api/projects', function(req, res, next) {
    Project.find(function(err, projects) {
        if (err) { return next(err); }
        return res.json({'projects': projects });
    })
});

// READ a specific project by id
router.get('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;
    Project.findById(id, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(project);
    });
});

//READ get all projects for a user
router.get('/api/users/:user_id/projects', function(req, res, next) {
    var user_id = req.params.user_id;
    User.findById(user_id).populate('projects').exec(function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        var projects = user.projects;
        return res.json({'projects': projects });

       // return res.json(user);
    });
});

// UPDATE all attributes of a specific project by id
router.put('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;
    Project.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(project);
    });
});

// UPDATE selected attributes of a specific project by id
router.patch('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;
    Project.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, project){
        if (err) { return next(err); }
        if (project === null) {
            return res.status(404).json({'message': 'Project not found'});
        }
        return res.json(project);
    });
});

// DELETE a specific project by id
router.delete('/api/projects/:id', function(req, res, next) {
    var id = req.params.id;

    Project.findOneAndDelete( {_id: id}, function (err, project) {
        if (err) { return next(err); }
        if (project == null) {
            return res.status(404).json({"message": "Project not found"});
        }
       return res.status(200).json(project);
    });
});

//DELETE all projects for a user
router.delete('/api/users/:user_id/projects', function(req, res, next) {
    var user_id = req.params.user_id;
    //User.findById(user_id).populate('projects').exec(function(err, user){
    User.findByIdAndDelete(user_id).populate('projects').exec(function(err, user){
        if (err) { return next(err); }
        if (user === null) {
            return res.status(404).json({'message': 'User not found'});
        }
        var projects = user.projects;
        return res.json({'projects': projects });

       // return res.json(user);
    });
});

//DELETE all projects in collection
router.delete('/api/projects', function (req, res, next) {

    Project.deleteMany(function (err, project) {
        if (err) { return next(err); }
        return res.status(200).json(project);
    });
});

module.exports = router;




















































// CREATE a project document
// router.post('/api/projects', function(req, res) {
//     var project = new Project(req.body);
//     project.save(function(err, project) {
//         if (err) { return console.error(err); }
//         res.status(201).json(project);
//     });   
// });

// CREATE a project and update project "project" field with it
// router.post('api/projects', function(req, res) {
     
//   var project = new Project(req.body);

//   project.save();

   
//     return project.findOneAndUpdate({ _id: req.params.id }, { review: dbReview._id }, { new: true });
//   })
//   .then(function(dbProduct) {
    
//     res.json(dbProduct);
//   })
//   .catch(function(err) {
    
//     res.json(err);
//   });
// });
    
    //WORKED ON THE OTHER DAY
//router.post('/api/projects/:user_id/projects', function(req, res) {

    // var project = new Project (req.body);
   
    // console.log(project._id);
   
    // project.save();

    
    // var user_id = req.params.user_id;
    // var project = Project.findOneAndUpdate({_id: user_id}, {}, {new: true });

    // console.log(project);
    // res.status(201).json(project);



    // var project = Project.findById(user_id);
    
    // console.log(user_id);
    // console.log(project.first);
   
    // var project = new Project ( req.body);
    // project.save(function(err, project) {
    //     if (err) { return console.error(err); }
    //     res.status(201).json(project);
    // });  
//}); 










// router.post('/api/projects/:user_id/projects', function(req, res) {
//     var user_id = req.params.user_id;
//     var project = Project.findById(user_id);
    
//     console.log(user_id);
//     console.log(project.first);
   
//     var project = new Project ( req.body);
//     project.save(function(err, project) {
//         if (err) { return console.error(err); }
//         res.status(201).json(project);
//     });   
// }); 

// READ all projects in database
// router.get('/api/projects', function (req, res, next) {
//     Project.find(function(err, projects) {
//         if (err) { return next(err); }
//         res.json( {'projects': projects });

//     })
// });

// // READ a specific project by id
// router.get('/api/projects/:id', function(req, res, next) {
//     var id = req.params.id;
//     Project.findById(id, function(err, project){
//         if (err) { return next(err); }
//         if (project === null) {
//             return res.status(404).json({'message': 'Project not found'});
//         }
//         res.json(project);
//     });
// });

// // UPDATE all attributes of a specific project by id
// router.put('/api/projects/:id', function(req, res) {
//     var id = req.params.id;
//     var updated_project = {
//         "_id": id,
//         "name": req.body.name,
//         "date": req.body.date,
//         "status": req.body.status,
//         "priority": req.body.priority,
//         "note": req.body.note,
//         "image": req.body.image
//     }
//     projects[id] = updated_project;
//     res.json(updated_project);
// });

// // UPDATE selected attributes of a specific project by id
// router.patch('/api/projects/:id', function(req, res) {
//     var id = req.params.id;
//     var project = projects[id];

//     var updated_project = {
//         "_id": id,
//         "name": (req.body.name || project.name), 
//         "date": (req.body.date || project.date),
//         "status": (req.body.status || project.status),
//         "priority": (req.body.priority || project.priority),
//         "note": (req.body.note || project.note),
//         "image": (req.body.image || project.image)
//     }
//     projects[id] = updated_project;
//     res.json(updated_project);
// });

// // DELETE a specific project by id
// router.delete('/api/projects/:id', function(req, res) {
//     var id = req.params.id;

//     Project.findOneAndDelete( {_id: id}, function (err, project) {
//         if (err) { return next(err); }
//         if (project == null) {
//             return res.status(404).json(
//                     {"message": "Project not found"});
//         }
//         res.json(project);
//     });
// });

// module.exports = router;