var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path');
var playground = require('./models').playground;

var hbs = exphbs.create({
    defaultLayout: 'main'
});


app.set('views',path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.set('ports', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname,'public')));

function createPlayground(req, res) {
	return playground
		.all()
		.then(playgrounds => res.status(200).send(playgrounds))
		.catch(error => res.status(400).send(error));
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

// var pg = require('pg');
// var conString = "postgres://trieu:tidalWAVE10@localhost:5432/trieu";

// var client = new pg.Client(conString);
// client.connect();

// //queries are queued and executed one after another once the connection becomes available
// var x = 1000;

// var query = client.query("SELECT * FROM playground");
// //fired after last row is emitted

// query.on('row', function(row) {
//     console.log(row);
// });
