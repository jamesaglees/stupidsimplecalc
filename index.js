const http = require('http'), url=require('url'), querystring = require('querystring');
http.createServer(function(req, res) {
	var j = new Object();

	var url_parts = url.parse(req.url);
	var params = querystring.parse(url_parts.query);
	if (params.a != null && params.b != null){
		j.value=parseInt(params.a)+parseInt(params.b);
	} else {
		res.writeHead(400, {'Content-Type':'application/json'});
		j.error='Missing parameter a or b';
	}

	res.end(JSON.stringify(j));
}).listen(1337,'127.0.0.1');
console.log('Started server in 1337');	