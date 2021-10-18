const axios = require('axios');

async function fetchDataFromAPI(){
  console.log('Processando dados...')

  try {
    const { data } = await axios.get('https://covid.ourworldindata.org/data/owid-covid-data.json')
    const { OWID_WRL: worldData } = data;

    return (worldData.data)
  } catch (error) {
    console.log('Opss, Algo deu errado, tente novamente mais tarde!')
  }
}

module.exports = fetchDataFromAPI;
