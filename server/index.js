var	express 	= require('express'),
		fs			= require('fs'),
		app 		= express(),
		PORT		= process.env.PORT || 4000;


app.use('/',express.static('view/directory'));

app.get('/form', (req, res) => {
	res.send(fs.readFileSync('view/form/karls/index.html', 'utf8'));
	res.end();
});

// app.post('/newUser', (req, res) => {
// 	var userData = req.data;
// });

app.listen(PORT, ()=>{
	console.log("Listening on port: " + PORT);
});
