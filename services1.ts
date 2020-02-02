
import request from 'request-promise-native'
//const request = require('request-promise-native');

const url = 'http://localhost:8080/clients';

export function listerClients(clients: string[]) :Promise<string[]>|void {

    return new Promise((resolve, reject) => {
        if (clients) {
            resolve(clients);
        } else {
            reject(`No clients`);
        };
    });
}