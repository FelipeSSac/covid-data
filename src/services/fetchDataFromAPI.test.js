const fetchDataFromAPI = require('./fetchDataFromAPI');
const ensureDate = require('../helpers/ensureDate');

describe('Data from the public API of "Our World In Data"', () => {
  test('yesterday cases greater than 0', async () => {
      const data = await fetchDataFromAPI()
      const yesterdayDate = ensureDate(new Date())

      const yesterday = data.find(data => data.date === yesterdayDate)
      const { new_cases: yesterdayCases } = yesterday

      expect(yesterdayCases).toBeGreaterThan(0);
  });

  test('04/12/2021 cases is equal to 690431', async () => {
    const data = await fetchDataFromAPI()
    const date = ensureDate(new Date('04/12/2021'))

    const day = data.find(data => data.date === date)
    const { new_cases: cases } = day

    expect(cases).toEqual(690431);
});
})
