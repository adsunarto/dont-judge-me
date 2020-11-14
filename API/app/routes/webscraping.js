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
        results[0] = results[0].replace("[","").replace("]","").split(',');
        results[1] = results[1].replace("[","").replace("]","").split(',');
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