const request = require('request');

const period = 1 * 120; // 2min
function genSendIPOptions(id, ip){
	return {
		uri: 'http://getip.sousys.com',
        	method: 'POST',
        	json: {
          		"id": id,
          		"ip": ip
        	}
	};
}
setInterval(()=>{
    let getIPOptions = {
        uri: 'https://checkip.amazonaws.com',
        method: 'GET'
    };
    request(getIPOptions, (error, response, data)=>{
	    if(data != null){
	    	let option = genSendIPOptions("rpi", data);
		console.log(option);
		request(option, (err, res, data)=>{
		
		}
	    }
    });
}, period);
