//Trayendo al primer pokemon con callbacks y node js


let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://pokeapi.co/api/v2/pokemon/'


function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest;
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4){
           
            if (xhttp.status === 200) {
             
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error("Error en " + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}


fetchData(API, function(error1, data1){
    if(error1) return console.error(error1 + " --- error 1");
    fetchData(API + data1.results[0].name, function(error2, data2){
        if (error2) return console.error(error2 + "--- error 2");
        fetchData(data2.location_area_encounters, function(error3, data3){
            if (error3) return console.error(error3 + "--- error 3");
            console.log(`El nombre del pokemon es ${data2.name}`)
            console.log(data2.id);
            console.log(data3[0].location_area.name);
           
        })
    });
})

