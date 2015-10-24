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
    update: function(req,res){
        var query={name: /skol/i}
        ,mod = {
            name: 'Brahma',
            alcohol: 4,
            price: 6,
            category: 'Pilsen'
        }
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
        var query={name: /Brahma/i}
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