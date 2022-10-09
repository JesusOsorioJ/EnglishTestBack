const Router = require('express');
const {
    handlerAllTitle, 
    handlerSingleBySubtittle,
    handlerCreateBySubtittle,
    handlerSearchTestBySubtittle
} = require('./controller');

const router = Router();

router.get('/', handlerAllTitle);
router.get('/:id', handlerSingleBySubtittle);
router.post('/createupdate', handlerCreateBySubtittle);
router.get('/searchtest/:id', handlerSearchTestBySubtittle),

module.exports = router;