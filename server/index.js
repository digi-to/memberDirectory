var	express 	= require('express'),
		fs			= require('fs'),
		app 		= express(),
		PORT		= 4000;


app.use(express.static('view/build'));

app.get('/form', (req, res) => {
	res.send(fs.readFileSync('view/form/index.html', 'utf8'));
	res.en();
});

// app.post('/newUser', (req, res) => {
// 	var userData = req.data;
// });

app.listen(PORT, ()=>{
	console.log("Listening on port: " + PORT);
});
