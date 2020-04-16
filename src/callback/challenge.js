let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange() = function(event) {
        if(xhttp.readySate  === 4){ //completado
            if(xhttp.status === 200){ // HTTP code
                //1. error, 2. resultado
                callback(null, JSON.parse(xhttp.responseText)) 
            }else {
                const error = new Error('Error ' + url_api);
                callback(error, null);
            }
        }
    }
    xhttp.send();
}

