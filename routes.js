const title= require('./api/title');

function routes(app){
    app.use('/api/title', title)
}


module.exports = routes