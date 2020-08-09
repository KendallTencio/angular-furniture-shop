import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  client = new Client();
  errorFlag = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }


  registerClient(){
    let clients : Array<Client> = JSON.parse(localStorage.getItem("clients"));
    if(this.client.name !== undefined && this.client.email !== undefined
      && this.client.password !== undefined && this.client.country !== undefined
      && this.client.state !== undefined){      
      clients.push(this.client);
      localStorage.setItem("clients",JSON.stringify(clients));
      this.router.navigate(['/client'])
      localStorage.setItem("token",this.client.name.toString());
    }else{
      this.errorFlag = !this.errorFlag;
    }
  }

}
