import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-manage',
  templateUrl: './general-manage.component.html',
  styleUrls: ['./general-manage.component.css']
})
export class GeneralManageComponent implements OnInit {

  sucursalPais = false;
  empleados = false;
  salarios = false;
  despedir = false;
  contratar = false;
  rango = false;
  modificarSalario = false;
  expectativa = false;

  date = new Date();
  
  
  month = this.date.getUTCMonth();
  year = this.date.getFullYear();

  listaSucursalesPais = [{"name" : "Sucursal Cartago"},
                         {"name" : "Sucursal Heredia"},
                         {"name" : "Sucursal San José"},
                         {"name" : "Sucursal Alajuela"}];
 
  listaEmpleados =      [{"name" : "Kendall Tencio","salary": 3000, "position" : "Administrador de proyectos"},
                         {"name" : "Sergio Fonseca","salary": 4000,"position" : "Jefe de Bodega"},
                         {"name" : "Adrián Mora","salary": 5000,"position" : "Ingeniero de software"},
                         {"name" : "Sebastian Segura","salary": 6000,"position" : "Albañil"}];



  constructor() { }

  ngOnInit() {
    
  }

  changeFlag(flag:string){
    console.log(flag,"AAAA")
    if(flag === "sucursal"){
      this.sucursalPais = !this.sucursalPais ;
      this.empleados = false;
      this.salarios = false;
      this.despedir = false;
      this.contratar = false;
      this.rango = false;
      this.modificarSalario = false;
      this.expectativa = false;
    }else if( flag === "empleados"){
      this.sucursalPais = false ;
      this.empleados = !this.empleados;
      this.salarios = false;
      this.despedir = false;
      this.contratar = false;
      this.rango = false;
      this.modificarSalario = false;
      this.expectativa = false;
    } else if (flag ==="salarios"){
      this.sucursalPais = false ;
      this.empleados = false;
      this.salarios = !this.salarios;
      this.despedir = false;
      this.contratar = false;
      this.rango = false;
      this.modificarSalario = false;
      this.expectativa = false;
    }else if (flag ==="despedir"){
      this.sucursalPais = false ;
      this.empleados = false;
      this.salarios = false;
      this.despedir = !this.despedir;
      this.contratar = false;
      this.rango = false;
      this.modificarSalario = false;
      this.expectativa = false;
    }else if (flag ==="contratar"){
      this.sucursalPais = false ;
      this.empleados = false;
      this.salarios = false;
      this.despedir = false;
      this.contratar = !this.contratar;
      this.rango = false;
      this.modificarSalario = false;
      this.expectativa = false;
    }else if (flag ==="rango"){
      this.sucursalPais = false ;
      this.empleados = false;
      this.salarios = false;
      this.despedir = false;
      this.contratar = false;
      this.rango = !this.rango;
      this.modificarSalario = false;
      this.expectativa = false;
    }else if (flag ==="modificarSalario"){
      this.sucursalPais = false ;
      this.empleados = false;
      this.salarios = false;
      this.despedir = false;
      this.contratar = false;
      this.rango = false;
      this.modificarSalario = !this.modificarSalario;
      this.expectativa = false;
    }else{
      this.sucursalPais = false ;
      this.empleados = false;
      this.salarios = false;
      this.despedir = false;
      this.contratar = false;
      this.rango = false;
      this.modificarSalario = false;
      this.expectativa =!this.expectativa ;
    }

  }
  

}
