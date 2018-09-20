let bodyParser= require('body-parser');
let urlencodeParser=bodyParser.urlencoded({extended:false});
let mongoose= require('mongoose');
mongoose.connect('mongodb://aria:zdx123@ds159782.mlab.com:59782/aria-data', {useNewUrlParser:true},function(err,db){
    if(err) throw err;
});
let appSchema= new mongoose.Schema({
    item:String
});
let appCollection=mongoose.model('appCollection',appSchema);

console.log()
module.exports=function(app){
    app.get('/todo',function(req,res){
        appCollection.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{items:data})
        });
    });
    
    app.post('/todo',urlencodeParser,function(req,res){
        appCollection(req.body).save(function(err,data){
            if(err) throw err;
            res.json('');
        })
    });

    app.delete('/todo/:item',urlencodeParser,function(req,res){
        appCollection.find({item:req.params.item}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });

}