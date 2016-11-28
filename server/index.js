var	express 	= require('express'),
		fs			= require('fs'),
		app 		= express(),
		mysql		= require('mysql'),
		queries	= require('./sqlQueries.js'),
		PORT		= process.env.PORT || 4000,
		connection = mysql.createConnection({
			host     : 'localhost',
			user     : 'root',
			password : 'root',
			database : 'HACKATHON'
		});

execsql.config(dbConfig)
	.exec(sql).end();

api.use(bodyParser.urlencoded({ extended:false }));
api.use(bodyParser.json());

app.use('/',express.static('view/directory'));

app.use('/form', express.static('view/form/karls'));

// app.get('/form', (req, res) => {
// 	res.send(fs.readFileSync('view/form/karls/index.html', 'utf8'));
// 	// res.send(fs.readFileSync('view/form/karls/bulma.css', 'utf8'));
// 	res.end();
// });

app.post('/newUser', (req, res) => {
	console.log(req.body);
	var userData = req.body;
	var queryStr = queries.newUser(userData.fname, userData.lname, userData.email, userData.desc, userData.projects);
	connection.query(queryStr, (err, rows, fields) => {
		if (err) throw err;
	});
	connection.end();
});

app.listen(PORT, ()=>{
	console.log("Listening on port: " + PORT);
});
