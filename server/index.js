var	express		= require('express'),
		fs				= require('fs'),
		bodyParser	= require('body-parser'),
		app 			= express(),
		mysql			= require('mysql2'),
		queries		= require('./sqlQueries.js').queries(),
		PORT			= process.env.PORT || 4000,
		connection 	= mysql.createConnection({
			host     : 'localhost',
			user     : 'root',
			password : 'hackerpass',
			database : 'HACKATHON',
			insecureAuth	:	true
		});

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use('/',express.static('view/directory'));

app.use('/form', express.static('view/form/karls'));

app.post('/newUser', (req, res) => {
	console.log(req.body);
	var userData = req.body;
	var queryStr = queries.newUser(userData.fname, userData.lname, userData.email, userData.desc, userData.projects);
	connection.query(queryStr, (err, results, fields) => {
		if (err) throw err;
	});
	connection.end();
	res.end();
});

app.get('/users', (req, res) => {

});

app.listen(PORT, ()=>{
	console.log("Listening on port: " + PORT);
});
