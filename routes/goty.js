const { Router } = require('express');
const { gotyVoto, gotyData } = require('../controllers/goty');

const router = Router();

router.get('/', gotyData )

router.post('/:id', gotyVoto );

module.exports = router;