const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
let convert = {}

const app = express();

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesiano = (a, b, ...c) => (b ? cartesiano(f(a, b), ...c) : a);
const t9 = [{ 'letras':[''] },
		{ 'letras':['a','b','c'] },
		{ 'letras':['d','e','f'] },
		{ 'letras':['g','h','i'] },
		{ 'letras':['j','k','l'] },
		{ 'letras':['m','n','o'] },
		{ 'letras':['p','q','r','s'] },
		{ 'letras':['t','u','v'] },
		{ 'letras':['w','x','y','z']}];


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/api/passwords', (req, res) => {
  const count = 5;


  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )


  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);



app.get('/apii/:id', function(req, res) {

    res.send(convert.getL(req.params.id));
});

app.listen(process.env.PORT || 5000, function() {
        console.log("Servidor corriendo");
});

convert.getL = function getList(id){
	if(isNaN(id)|| id == ''){
		return '';
	}else{
		let arreglo = [];
		var letras = id+'';
		var arrayLetras = letras.split('');
		for (index = 0; index < arrayLetras.length; index++) { 
			arreglo.push(t9[arrayLetras[index]-1].letras);
		}
		let output = cartesiano(...arreglo);
		return output;
	}
}

module.exports = convert;
