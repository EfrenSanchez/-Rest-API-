//Endpoints for external data
const { Router } = require('express');
const fetch = require('node-fetch');

const router = new Router();

router.get('/', async (req, res) =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
  const data = await response.json();
  res.json(data);
});

module.exports = router;
