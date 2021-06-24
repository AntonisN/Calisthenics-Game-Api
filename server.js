const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const PORT = 8000

const MongoClient = require('mongodb').MongoClient
MongoClient.connect(
	'mongodb+srv://cali:py4BWnAfx7ioCCV2@cluster0.a5wqq.mongodb.net/caliDB?retryWrites=true&w=majority',
	{
		useUnifiedTopology: true,
	},
	(err, client) => {
		if (err) return console.error(err)
		console.log('Connected to Database')
	}
)

app.use(cors())
app.use('/client-side', express.static('./client-side/'))

let caliExercise = {
	handstand: {
		name: `Handstand`,
		level: 5,
		description: `Hold handstand for 20s`,
		//image:
		//video:
	},
	'muscle up': {
		name: `Muscle Up`,
		level: 5,
		description: `Do 5 muscle ups`,
		//image:
		//video:
	},
	planche: {
		name: `Planche`,
		level: 5,
		description: `Hold planche for 5s`,
		//image:
		//video:
	},
	'push up': {
		name: `Push Up`,
		level: 3,
		description: `Do 10 Pushups perfect form`,
	},
}

app.use(bodyParser.urlencoded({ extended: true }))

// Handlers

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/api/caliExercise/:exName', (req, res) => {
	const nameOfEx = req.params.exName.toLowerCase()
	console.log(nameOfEx)
	if (caliExercise[nameOfEx]) {
		res.json(caliExercise[nameOfEx])
	} else {
		res.json(caliExercise['push up'])
	}
})

app.listen(process.env.PORT || PORT, () => {
	//Heroku || locally
	console.log(`Server listening on ${PORT}`)
})
