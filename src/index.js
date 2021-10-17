const askDaysToCome = require('./askDaysToCome');
const fetchDataFromAPI = require('./fetchDataFromAPI')

async function start() {
  const answer = askDaysToCome()
  const data = await fetchDataFromAPI()

  console.log({answer, data})
}

start()
