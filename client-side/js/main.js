document.querySelector('button').addEventListener('click', getCaliExercise)

async function getCaliExercise() {
  const nameOfEx = document.querySelector('input').value
    try {
      const res = await fetch(
				`https://calisthenics-game-api.herokuapp.com//api/caliExercise/${nameOfEx}`
			)
      const data = await res.json()
      console.log(data)
      document.querySelector('h2').innerText = data.description
    } catch (err) {
        console.log(err)
    }
}