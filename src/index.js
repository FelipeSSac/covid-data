const askDaysToCome = require('./controllers/askDaysToCome');
const ensureDaysToCome = require('./controllers/ensureDaysToCome');

async function start() {
  const days = askDaysToCome()

  await ensureDaysToCome(days)
}

start()
