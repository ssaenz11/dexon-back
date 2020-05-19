let convert = require('../index.js')
let assert = require('assert');


describe('Digitar 1', function() {
	it('Debería entregar un espacio vacío', function() {
		assert.equal('' , convert.getL(1)[0]);
	});
});

describe('Digitar 1 y otro número ', function() {
	it('Debería entregar un arreglo de espacios vacíos', function() {
		assert.equal(',a', convert.getL(12)[0].toString());
		assert.equal(',b', convert.getL(12)[1].toString());
		assert.equal(',c', convert.getL(12)[2].toString());
	});
});

describe('Parámetro vacío', function() {
	it('Debería entregar un elemento vacío', function() {
		assert.equal('', convert.getL(''));
	});
});

describe('Parámetro no numérico', function() {
	it('Debería entregar un elemento vacío', function() {
		assert.equal('', convert.getL('a'));
	});
});


