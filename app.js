let express = require('express');
let todoController = require('./controller/todoController');
let app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));
todoController(app);
app.listen(3000);