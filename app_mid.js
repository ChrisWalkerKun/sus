const express = require ( 'express' );
const app = express();

app.use((req, res, next) => {
    let date = new Date(Date.now()).toLocaleString();
    res.send(date);
    console.log( 'Time:' , date);
	next();
});

app.listen(process.env.port || 3000 );
console.log( 'Web Server is listening at port ' + (process.env.port || 3000 ));