let bodyParser= require('body-parser');
let urlencodeParser=bodyParser.urlencoded({extended:false});

let items=[{item:"这是第一条数据"},
        {item:"这是第二条数据"},
        {item:"这是第三条数据"}];


module.exports=function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{items:items});
    });
    
    app.post('/todo',urlencodeParser,function(req,res){
        items.push(req.body);
    });

    app.delete('/todo',function(req,res){

    });

}