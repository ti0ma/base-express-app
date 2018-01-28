const TestService = require('api/services/test/test.service');

async function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
};

exports.index = async (req, res, next) => {
  const id = TestService.getId(req.params.id);

  await wait();

  res.status(200).json({
    id
  });
};
