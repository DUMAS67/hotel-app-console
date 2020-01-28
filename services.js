var request = require('request');


// technique du callback

// callback

function listerClients(callBackEr,callbackFn) {

    request('https://jsonplaceholder.typicode.com/posts', { json: true }, function (err, res, data) {
        // function (err,res,data) {..} déclanchée seulement quand réponse à la requete http 
        // mode asynchrone -> économie de ressources, de thread
        // 3
        if (err)  {callBackEr(err)} 
        else {
        callbackFn(data);// valorisée après la réponse http
        }
    });

}
exports.listerClients=listerClients;