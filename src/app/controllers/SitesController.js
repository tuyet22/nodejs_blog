const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SitesController {
    //[GET] /home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = multipleMongooseToObject(courses);
                res.render('home', { courses });
            })
            .catch(next);
    }

    //[GET] /home/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
