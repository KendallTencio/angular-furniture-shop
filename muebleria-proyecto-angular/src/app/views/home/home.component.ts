import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { Router } from '@angular/router';
import { AuthService } from '../../models/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  client : Client;
  errorFlag = false;
  user = {
    "email" : "",
    "password" : "" 
  }

  constructor(private router : Router, public authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    let clients : Array<Client> = JSON.parse(localStorage.getItem("clients"));
    let national  = JSON.parse(localStorage.getItem("national"));
    let general  = JSON.parse(localStorage.getItem("general"));
    let ceo  = JSON.parse(localStorage.getItem("ceo"));
    if(this.user.email !== "" && this.user.password !== ""){
      if(this.user.email == national.email && this.user.password == national.password){
          localStorage.setItem("token",this.user.email);
          this.router.navigate(['/nationalManage']);
      } else if (this.user.email == general.email && this.user.password == general.password){
        localStorage.setItem("token",this.user.email);
        this.router.navigate(['/generalManage']);
      }else if (this.user.email == ceo.email && this.user.password == ceo.password){
        localStorage.setItem("token",this.user.email);
        this.router.navigate(['/ceo']);
      }else{
        this.client = clients.find( ({ email }) => email === this.user.email );
        if(this.client){
          if(this.client.email == this.user.email && this.client.password == this.user.password){
            localStorage.setItem("token",this.client.name.toString());
            this.router.navigate(['/client']);
          }else{
            this.errorFlag = !this.errorFlag;
          }
        }else{
          this.errorFlag = !this.errorFlag;
        }
      }
    }else{
      this.errorFlag = !this.errorFlag;
      
    }
  }

}
