const { Router } = require ('express');

const router = new Router();

router.get('/', (req, res) => {
  res.send("HOME. ======> Go to /api/movies or /api/users");
});

module.exports = router; 