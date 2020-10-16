const orphanages = require('./database/fakedata');

module.exports = {
    index(req, res){
        res.render('index');
    },

    orphanage(req, res){
        res.render('orphanage');
    },

    orphanages(req, res){
        res.render('orphanages', {orphanages});
    },

    createOrphanage(req, res){
        res.render('create-orphanage');
    }

}