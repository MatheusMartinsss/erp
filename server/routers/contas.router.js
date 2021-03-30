module.exports = app => {
    const conta = require('../controllers/index');
    var router = require('express').Router();

    router.post('/teste', conta.createCount)
    router.get('/teste', conta.loadAll)
    router.get('/teste/:documento', conta.findOne)
    router.post('/teste/:id', conta.update)
    router.delete('/teste/:id', conta.findDeleteOne)
    
    app.use('/api', router)
}