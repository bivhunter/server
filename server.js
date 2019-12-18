const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

/*app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))*/

app.use('/', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
	console.log(__dirname)
	response.sendFile(__dirname + '/public/index.html');
})

app.listen(process.env.PORT || 5000);
console.log('listen')