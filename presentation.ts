import {Client} from './domain';
const readline = require('readline');
// création d'un objet `rl` permettant de récupérer la saisie utilisateur 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function start() {
    const menu =
        `1. Lister les clients
99. Sortir
choix : `;
    // récupération de la saisie utilisateur 
    let tClients:Client[] = new Array;
    rl.question(menu, (saisie: string) => {
        // la variable `saisie` contient la saisie effectuée 
        if (saisie === '99') {
            rl.close();
        }// attention, une fois l'interface fermée, la saisie n'est plus possible
        else {
            let c:Client = new Client('','');
            if (saisie === '1') {
                console.log(`Vous avez saisi : >> Liste des clients `);
              c.listerClients(tClients).then((data: any[]) => // ici on a eu la réponse les données sont dans data
                    {
                        return data.forEach(unClient => console.log(`${unClient.nom} ${unClient.prenoms}`));
                    })
                .catch(console.log(`Erreur`));
                start();
            }
        }
    });
}