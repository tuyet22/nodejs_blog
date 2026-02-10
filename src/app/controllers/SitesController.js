class SitesController {
  //[GET] /home
  index(req, res) {
    res.render('home');
  }

  //[GET] /home/search
  show(req, res) {
    res.render('search');
  }
}

module.exports = new SitesController();
