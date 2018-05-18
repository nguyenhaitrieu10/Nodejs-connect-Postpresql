var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var database = require('./models');

var hbs = exphbs.create({
    defaultLayout: 'main'
});

app.set('views',path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('ports', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname,'public')));

// get database
comment = database.comment;
article = database.article;

function createPlayground(req, res) {
	return comment
		.all()
		.then(comment => res.status(200).send(comment))
		.catch(error => res.status(404).send(error));
}

app.get('/', createPlayground);

// app.get('/',function(req, res){	
// 	res.render('pages/home', {title: "home"});

// });

// app.get('/detail/:name',function(req, res){	
// 	res.render('pages/detail', {title: "name"});
// });

app.listen(app.get('ports'), function(){
	console.log('Server started on port ' + app.get('ports'));
});