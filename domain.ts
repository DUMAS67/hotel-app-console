import request from 'request-promise-native'
export class BaseEntite {

    constructor(private _uuid: string) { };

}
export class Client extends BaseEntite {
    constructor(private _nom: string, private _prenom: string) {
        super();
    }

    get nom(): string {
        return this._nom;
    }

    listerClients(clients: Client[]): Promise<Client[]> | void {

        return new Promise((resolve: (arg0: Client[]) => void, reject: (arg0: string) => void) => {
            if (clients) {
                resolve(clients);
            } else {
                reject(`No clients`);
            };
        })
    };



    public findByNom(param: string): Promise<Client> | void {

        return new Promise((resolve, reject) => {
            const setClient = new Array;
            for (let client of setClient) {
                if (client.nom() === param) {
                    resolve(client);
                }
                reject(`No trip found with name ${param}`)
            }
        });
    }
}



export class Chambre extends BaseEntite {

    constructor(private _numero: string, private _surfaceEnM2: number) {
        super();

    };

    public listerChambre(chambres: Chambre[]): Promise<Chambre[]> | void {

        return new Promise((resolve, reject) => {
            if (chambres) {
                resolve(chambres);
            } else {
                reject(`No clients`);
            };
        })
    };
}