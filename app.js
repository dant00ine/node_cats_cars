// get http module
var http = require('http');

//fs module allows read and write content
var fs = require('fs');

//create server using http module
var server = http.createServer(function(request, response){
	//see what URL the clients are requesting:
	console.log('requestmon'+request.url);
	console.log(response);
	console.log('client request URL: ', request.url);
	//routing:
	if(request.url === '/'){
		fs.readFile('views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'content-type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	//IMAGES HANDLING
	else if (request.url === '/image1'){
		fs.readFile('./images/LF15_r141_001.jpg', function(errors, contents){
			response.writeHead(200, {'content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}

	else if (request.url === '/image2'){
		fs.readFile('./images/ar-chan.jpg', function(errors, contents){
			response.writeHead(200, {'content-type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	//LOAD STYLING
	else if (request.url === '/stylin'){
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'content-type': 'text/css'});
			response.write(contents);
			response.end();
		});
	}
	//cars page
	else if (request.url === '/cars'){
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'content-type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	//cats page
	else if (request.url === '/cats'){
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'content-type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	//car form page
	else if (request.url === '/cars-new'){
		fs.readFile('views/cars-new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'content-type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}
	else {
		response.end('Not a real directory noob');
	}
});

//server port
server.listen(7077);

process.on('uncaughtException', function(err){
	console.log(err);
})

console.log('running in localhost at port 7077');