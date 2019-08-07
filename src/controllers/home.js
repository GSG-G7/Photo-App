const home = (req, res) => {
  // console.log(req.originalUrl);
  // console.log(req. baseUrl);
  // console.log(req.body);
  res.render('home', { message: 'search for a lot of photos using our app' });
};

module.exports = home;
