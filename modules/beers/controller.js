var Model=require('./model');

var Controller = {
    create: function(req,res){
        var dados = req.body
        ,model = new Model(dados)
        ,msg = '';

        model.save(function(err,data){
            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                console.log('Cerveja Inserida: ',data);
                msg = data;
            }
            res.json(msg);
        });
    },
    list: function(req,res){
        var query={}
        ,msg ='';

        Model.find(query, function(err, data){
            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                console.log('Listagem: ', data);
                msg = data;
            }
            res.render('list', { title: 'Listagem de cervejas', 
                beers: data});
        });
    },
    retrieve: function(req,res){
        var query={}
        ,msg ='';

        Model.find(query, function(err, data){
            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                console.log('Listagem: ', data);
                msg = data;
            }
            res.json(msg);
        });
    },
    get: function(req,res){
        var query={_id: req.params.id}
        ,msg ='';

        Model.findOne(query, function(err, data){
            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                console.log('Listagem: ', data);
                msg = data;
            }
            res.render('item', {beer: data});
        });
    },
    update: function(req,res){
        var query={_id: req.params.id}
        ,mod = req.body
        ,optional = {
            upsert:false,
            multi: false
        }
        ,msg ='';

        Model.update(query, mod, optional, function(err, data){
            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                console.log('Cerveja Alterada: ', data);
                msg = data;
            }
            res.json(msg);
        });
    },
    delete: function(req,res){
        var query={_id: req.params.id}
        ,msg ='';

        Model.remove(query, function(err,data){
            if(err){
                console.log('Erro: ', err);
                msg = err;
            }else{
                console.log('Cerveja Deletada, quantidade: ', data.result);
                msg = data;
            }
            res.json(msg);
        });
    }

}

module.exports = Controller;