const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 9000

app.use(cors())

let caliExercise = {
	'handstand': {
    'name':`Handstand` ,
		'level': 5,
		'description': `Hold handstand for 20s`,
		//image:
		//video:
	},
	'muscle up': {
    'name':`Muscle Up` ,
		'level': 5,
		'description': `Do 5 muscle ups`,
		//image:
		//video:
	},
	'planche': {
    'name': `Planche`,
		'level': 5,
		'description': `Hold planche for 5s`,
		//image:
		//video:
	},
  'push up': {
    'name': `Push Up`,
    'level': 3,
    'description': `Do 10 Pushups perfect form`
  }
}

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})

app.get('/api/caliExercise/:ExName', (request, response) => {
	const nameOfEx = request.params.ExName.toLowerCase()
	console.log(nameOfEx)
	if (caliExercise[nameOfEx]) {
		response.json(caliExercise[nameOfEx])
	} else {
		response.json(caliExercise['push up'])
	}
})

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
