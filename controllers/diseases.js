var express = require('express');
var async = require('async');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    db.disease.findAll().then(function(diseases) {
        res.render('diseases/all', { diseases: diseases });
    });
});

router.post('/', function(req, res) {
    db.disease.create({
        name: req.body.name,
        description: req.body.description,
        severity: req.body.severity,
        isTerminal: req.body.isTerminal,
        transmission: req.body.transmission
    }).then(function(disease) {
        var symptoms = [];
        if (req.body.symptoms) {
            symptoms = req.body.symptoms.split(',');
        }

        if (symptoms.length > 0) {
            async.forEachSeries(symptoms, function(symptom, cb) {
                db.symptom.findOrCreate({
                    where: { name: symptom.trim() }
                }).spread(function(symptom, wasCreated) {
                    disease.addSymptom(symptom);
                    cb();
                });
            }, function() {
                res.redirect('/diseases');
            });
        } else {
            res.redirect('/diseases');
        }
    }).catch(function(error) {
        console.log('error', error);
    });
});

router.get('/add', function(req, res) {
    res.render('diseases/add');
});

router.get('/:id', function(req, res) {
    var diseaseId = req.params.id;

    db.disease.findOne({
        where: { id: diseaseId },
        include: [db.symptom]
    }).then(function(disease) {
        res.render('diseases/show', { disease: disease });
    }).catch(function(error) {
        console.log('error', error);
    });
});



module.exports = router;
