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

  listaSucursalesPais = [{"name" : "Sucursal Cartago"},
                         {"name" : "Sucursal Heredia"},
                         {"name" : "Sucursal San José"},
                         {"name" : "Sucursal Alajuela"}];
  listaEmpleados =      [{"name" : "Kendall Tencio","salary": 3000},
                         {"name" : "Sergio Fonseca","salary": 4000},
                         {"name" : "Adrián Mora","salary": 5000},
                         {"name" : "Sebastian Segura","salary": 6000}];



  constructor() { }

  ngOnInit() {
  }

}
