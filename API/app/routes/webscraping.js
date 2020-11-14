module.exports = function(app) {
  require("dotenv").config()
  let {PythonShell} = require('python-shell');
  app.post('/api/getText', (req, res) => {
    let options = {
      scriptPath: `${process.env.SCRIPT_PATH}`,
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