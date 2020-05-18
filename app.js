
var express = require('express');
var app = express();

const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
const t9 = [{ 'letras':[''] },
		{ 'letras':['a','b','c'] },
		{ 'letras':['d','e','f'] },
		{ 'letras':['g','h','i'] },
		{ 'letras':['j','k','l'] },
		{ 'letras':['m','n','o'] },
		{ 'letras':['p','q','r','s'] },
		{ 'letras':['t','u','v'] },
		{ 'letras':['w','x','y','z']}];


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:id', function(req, res) {

    res.send(getList(req.params.id));
});

app.listen(3030, function () {
  console.log('Example app listening on port 3030!');
});

function getList(id){
	let arreglo = [];
	var letras = id+'';
	var arrayLetras = letras.split('');
	for (index = 0; index < arrayLetras.length; index++) { 
		arreglo.push(t9[arrayLetras[index]-1].letras);
	}
	let output = cartesian(...arreglo);
	return output;

}

