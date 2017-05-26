const TestService = require('api/services/test/test.service');

exports.index = (req, res, next) => {
  const id = TestService.getId(req.params.id);

  res.status(200).json({
    id
  });
};
