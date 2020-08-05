import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Client } from "./app/models/client.model"; 

let client = new Client();
let clients : Array<Client> = [];

client.name = "Sergio";
client.lastname = "Fonseca";
client.country = "Costa Rica";
client.state = "Cartago";
client.zip = 10000;
client.email = "client@gmail.com";
client.password  = "client1234";

clients.push(client);

localStorage.setItem("clients",JSON.stringify(clients));

let nationalManage = {
  "email": "national@gmail.com",
  "password": "national1234"
}
let generalManage = {
  "email": "general@gmail.com",
  "password": "general1234"
}
let ceo = {
  "email": "ceo@gmail.com",
  "password": "ceo1234"
}

localStorage.setItem("national",JSON.stringify(nationalManage));
localStorage.setItem("general",JSON.stringify(generalManage));
localStorage.setItem("ceo",JSON.stringify(ceo));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
