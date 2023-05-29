const express = require ( 'express' );
const app = express();

app.use((req, res, next) => {
	console.log( 'Time:' , Date.now());
	next();

    let date = new Date().toLocaleDateString();
    res.send(date);
});

app.listen(process.env.port || 3000 );
console.log( 'Web Server is listening at port ' + (process.env.port || 3000 ));