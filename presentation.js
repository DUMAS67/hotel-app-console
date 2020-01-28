var readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur 
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var services=require("./services");
function start() {
    var menu =
        `1. Lister les clients
99. Sortir
choix : `;
    // récupération de la saisie utilisateur 

    rl.question(menu, function (saisie) {
        // la variable `saisie` contient la saisie effectuée 

        if (saisie === '99') {
            rl.close();
        }// attention, une fois l'interface fermée, la saisie n'est plus possible
        else {
            start();
            if (saisie === '1') {
                console.log(`Vous avez saisi : >> Liste des clients `);
                services.listerClients(function (err) { console.log("Erreur", err) }, function (data) {
                    // ici on a eu la réponse les données sont dans data
                    data.forEach(function (unPost) { 
                    console.log(unPost.id)})
                });
            }
        }
    });
}
exports.start = start;