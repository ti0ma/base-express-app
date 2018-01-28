const packageJson = require('package.json');

exports.index = (req, res, next) => {
  const { name, version } = packageJson;

  const returnObj = {
    name,
    version
  };

  return res.status(200).json(returnObj);
};
