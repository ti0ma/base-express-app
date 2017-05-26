const packageJson = require('package.json');

exports.index = (req, res, next) => {
  const returnObj = {
    name: packageJson.name,
    version: packageJson.version
  };

  return res.status(200).json(returnObj);
};
