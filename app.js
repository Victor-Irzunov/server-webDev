const http = require('http')
const fs = require('fs')

// http.createServer().listen(3000)
// http.createServer((request, response) => response.end('Hello<br> my server')).listen(3000)          //.end закончить, ответить
http.createServer((request, response) => {

	response.setHeader('Content-type', 'text/html; charset=utf-8;')

	if (request.url == '/') {
		response.end('<h1>Main</h1> гоги')
	}
	else if (request.url == '/cat') {
		response.end('<b>Category</b> жопа')
	}
	else if (request.url == '/dat') {
		let myFile = fs.readFileSync('1.dat')
		response.end(myFile)
	}
}).listen(3000)