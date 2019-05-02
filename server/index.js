const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const router = express.Router();

const map = new Map();
app.use(bodyParser.json());

router.route('/')
.post((req, res, next)=>{
	if(req.body.ip != null && req.body.id != null){
		map.set(req.body.id, req.body.ip);
		res.sendStatus(200);
	}else{
		res.sendStatus(403);
	}
})
.get((req, res, next)=>{
	res.statusCode = 200;
	let result = {};
	for(let [key, value] of map){
    		// order is the insertion order
		result[key] = value;
	}
	res.json(result);
});
app.use(router);
const server = http.createServer(app);
server.listen(6789, "localhost", ()=>{
    // console.log(`SmallPump services server is running at http://${smallPump_ip}:${smallPump_port}`);
});
