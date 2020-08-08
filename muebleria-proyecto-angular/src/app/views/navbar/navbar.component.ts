import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../models/auth.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  flagHeader = false;

  constructor(public authService : AuthService) { }

  ngOnInit() {
    
  }

  verificarClienteIniciado(){
    if(localStorage.getItem('token') == "Client"){
       return true;
    }
    return false;
  }

  verificarGerenteNacionalIniciado(){
    if(localStorage.getItem('token') == "NationalManager"){
       return true;
    }
    return false;
  }

  verificarGerenteGeneralIniciado(){
    if(localStorage.getItem('token') == "GeneralManager"){
       return true;
    }
    return false;
  }

  verificarCEOIniciado(){
    if(localStorage.getItem('token') == "CEO"){
       return true;
    }
    return false;
  }

  

}
