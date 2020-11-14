module.exports = function(app) {
  let {PythonShell} = require('python-shell');
  app.post('/api/getText', (req, res) => {
    let options = {
      scriptPath: `/Users/adsunarto/Documents/Projects/dont-judge-me/API/app/routes`,
      args: [req.body.url]
    }

    PythonShell.run('webscraping.py', options, function (err, results) {
      if (results) {
        console.log(results);
        res.send(results);
        return;
      }
      else if (err) {
        console.log(err);
        return;
      }
    })
  })
};