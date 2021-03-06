const fetchDataFromAPI = require('../services/fetchDataFromAPI');

const ensureDate = require('../helpers/ensureDate');

async function ensureDaysToCome(days){
  const data = await fetchDataFromAPI()

  const currentData = ensureDate(new Date())

  try {
    const index = data.findIndex(data =>
      (data.date === currentData)
    )

    if(index === -1){
      throw new Error()
    }

    const { new_cases: currentDayNewCases } = data[index]

    const yesterdayIndex = index - 1
    const { new_cases: yesterdayNewCases } = data[yesterdayIndex]

    const dayBeforeYesterdayIndex = index - 2
    const { new_cases: dayBeforeYesterdayNewCases } = data[dayBeforeYesterdayIndex]

    for(let i = 1; i <= days; i++){
      const dayBeforeNewCases = i >= (days/2)
        ? yesterdayNewCases
        : dayBeforeYesterdayNewCases
      const margin = 1 + (0.2 * Math.random())

      const proportion = (currentDayNewCases/dayBeforeNewCases) * margin
      const newCases = Math.ceil(currentDayNewCases * proportion)

      console.log(`${i} => ${newCases}`)
    }
  } catch (error) {
    console.log('Opss, Algo deu errado, tente novamente mais tarde!')
  }
}

module.exports = ensureDaysToCome;
