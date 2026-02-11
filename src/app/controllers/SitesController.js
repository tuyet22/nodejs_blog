const Course = require('../models/Course');



class SitesController {
  //[GET] /home
  index(req, res, next) {
    Course.find({})
      .then(courses => res.render('home', {
        courses
      }))
      .catch(next)
    
  }
  


  //[GET] /home/search
  search(req, res) {
    res.render('search');
  }

}

module.exports = new SitesController();
