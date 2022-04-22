const fetchData = require('../utils/fetchData');

const API = 'https://pokeapi.co/api/v2/pokemon/'


fetchData(API)
    .then(data => {
        console.log(data.count)
        return fetchData(`${API}${data.results[0].name}`);
    })
    .then(data => {
        console.log(data.name)
    })
    .catch(err => console.log(err)); 