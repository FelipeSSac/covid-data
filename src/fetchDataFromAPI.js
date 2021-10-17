const axios = require('axios');

async function fetchDataFromAPI(){
  try {
    const response = await axios.get('https://covid.ourworldindata.org/data/owid-covid-data.xlsx')

    return response
  } catch (err) {
    return err
  }
}

module.exports = fetchDataFromAPI;
