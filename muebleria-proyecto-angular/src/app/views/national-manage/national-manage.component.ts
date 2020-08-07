import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-national-manage',
  templateUrl: './national-manage.component.html',
  styleUrls: ['./national-manage.component.css']
})
export class NationalManageComponent implements OnInit {
  reporteC = 0;
  reporte = 0;
  titulo = "Reportes"
  listaVentas = [];
  listaSucursales = [];
  listaProductos = [];
  listaFecha = [];
  listaGenerales = [];
  fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  fecha2 = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  sucursales = ["Sucursal Cartago","Sucursal Heredia","Sucursal San José","Sucursal Alajuela"];
  ReportesFecha = ["2020-08-10","2020-05-02", "2020-06-03", "2020-07-20"];

  ReportesFechas = [["2020-06-27","2020-08-02"], ["2020-06-03","2020-07-20"], ["2020-07-20","2020-08-05"]];

  selectedReporte = "Reportes hecho el " + this.ReportesFecha[0];

  selectedSucursal = "Reporte de la " + this.sucursales[0];

  listaVentasTotales =      [{"ID" : 253, "Fecha" : "2020-07-30","Sucursal": "Sucursal Cartago", "Productos" : [{"Producto" : "Silla grande", "Cantidad" : 5, "Total" : 5000}, {"Producto" : "Juego sala", "Cantidad" : 1, "Total" : 2000}] },
                         {"ID" : 254,"Fecha" : "2020-06-27","Sucursal": "Sucursal Heredia","Productos" : [{"Producto" : "Mesa", "Cantidad" : 2, "Total" : 6000}, {"Producto" : "Juego sala", "Cantidad" : 2, "Total" : 4000}]},
                         {"ID" : 255,"Fecha" : "2020-07-20","Sucursal": "Sucursal San José", "Productos" : [{"Producto" : "Silla grande", "Cantidad" : 2, "Total" : 2000}, {"Producto" : "Mesa", "Cantidad" : 1, "Total" : 3000}]},
                         {"ID" : 256,"Fecha" : "2020-08-02","Sucursal": "Sucursal Alajuela", "Productos" : [{"Producto" : "Mesa", "Cantidad" : 1, "Total" : 3000}]}];

  constructor(private router: Router,private activeRoute :ActivatedRoute) { 

  }
  
  ngOnInit() {
  }
  openVentas(){ 
    this.listaVentas = [];
    this.reporteC = 1;
    this.reporte = 0;
    this.titulo = "Reporte Ventas";
    this.generarVentas();
    this.selectedReporte = "Reporte ventas del" + this.ReportesFecha[0];
  }

  openGeneral(){ 
    this.listaGenerales = [];
    this.reporteC = 1;
    this.reporte = 4;
    this.titulo = "Reporte Ganancias Generales";
    this.generarGenerales();
    this.selectedReporte = "Reporte ventas del" + this.ReportesFecha[0];
  }


  openSucursal(){ 
    this.listaSucursales = [];
    this.reporteC = 1;
    this.reporte = 3;
    this.titulo = "Reporte Sucursal";
    if(this.selectedSucursal.startsWith("Reporte de la")){
      this.selectedSucursal = this.selectedSucursal.substring(14);
    }
    this.generarSucursales(this.selectedSucursal);
    this.selectedSucursal = "Reporte de la " +  this.sucursales[0];
  }

  openFecha(){ 
    this.listaFecha = [];
    this.reporteC = 1;
    this.reporte = 2;
    this.titulo = "Reporte por fechas";
    if(this.selectedReporte.length > 30){
      var num = this.selectedReporte.substring(0,1);
      this.fecha = this.ReportesFechas[num][0];
      this.fecha2 = this.ReportesFechas[num][1];
    }
    this.generarFecha(this.fecha, this.fecha2);
    this.reset();
  }

  openProducto(){ 
    this.listaProductos = [];
    this.reporteC = 1;
    this.reporte = 1;
    this.titulo = "Reporte Productos";
    this.generarProductos();
  }
  generarVentas(){
    this.listaVentasTotales.forEach(element => {
      element.Productos.forEach(products => {
        this.listaVentas.push({"ID" : element.ID, "Fecha" : element.Fecha, "Sucursal" : element.Sucursal, "Producto" : products.Producto, "Cantidad" : products.Cantidad, "Total" : products.Total});
      });
    });
  }

  generarGenerales(){
    var total = 0;
    this.listaVentasTotales.forEach(element => {
      element.Productos.forEach(products => {
        total += products.Total;
      });
    });
    this.listaGenerales.push({"Fecha" : formatDate(new Date(), 'yyyy-MM-dd', 'en'), "Total" : total});
  }

  generarProductos(){
    var entro;
    this.listaVentasTotales.forEach(element => {
      element.Productos.forEach(products => {
        entro = false;
        for (let index = 0; index < this.listaProductos.length; index++) {
          if(products.Producto == this.listaProductos[index].Producto && element.Sucursal == this.listaProductos[index].Sucursal){
            entro = true;
            this.listaProductos[index].Cantidad += products.Cantidad;
            this.listaProductos[index].Total += products.Total;
            break;
          }
        }
        if(!entro){
          this.listaProductos.push({"Producto" : products.Producto, "Sucursal" : element.Sucursal, "Cantidad" : products.Cantidad, "Total" : products.Total});
        }
      });
      
    });
  }

  fechaVer(){
    this.selectedReporte = "0. Reportes de el " + this.ReportesFechas[0][0] + " hasta el " + this.ReportesFechas[0][1];
  }

  selectChangeHandler (event: any) {
    this.selectedSucursal = event.target.value;
  }

  selectChangeHandler2 (event: any) {
    this.selectedReporte = event.target.value;
  }

  onChangeFecha(event: any) {
    this.fecha = event.target.value;
  }

  onChangeFecha2(event: any) {
    this.fecha2 = event.target.value;
  }
  generarSucursales(_sucursal: String){
    this.listaVentasTotales.forEach(element => {
      element.Productos.forEach(products => {
        if(element.Sucursal == _sucursal){
          this.listaSucursales.push({"ID" : element.ID, "Fecha" : element.Fecha, "Sucursal" : element.Sucursal, "Producto" : products.Producto, "Cantidad" : products.Cantidad, "Total" : products.Total});
        }
      });
    });
  }
  generarFecha(fechaIni:String, fechaFin:String){
    this.listaVentasTotales.forEach(element => {
      element.Productos.forEach(products => {
        if(fechaIni <= element.Fecha && element.Fecha <= fechaFin){
          this.listaFecha.push({"ID" : element.ID, "Fecha" : element.Fecha, "Sucursal" : element.Sucursal, "Producto" : products.Producto, "Cantidad" : products.Cantidad, "Total" : products.Total});
        }
      });
    });
  }

  reset(){
    this.selectedSucursal = "Reporte de la " +  this.sucursales[0];
    this.selectedReporte = "Reportes hecho el " + this.ReportesFecha[0];
    this.fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.fecha2 = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }

 backClicked() {
    this.reporteC = 0;
    this.reporte = 0;
    this.reset();
  }
}
