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
    console.log(this.date,this.month,this.year);
  }

}
