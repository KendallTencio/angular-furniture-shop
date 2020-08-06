import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-general-manage',
  templateUrl: './general-manage.component.html',
  styleUrls: ['./general-manage.component.css']
})
export class GeneralManageComponent implements OnInit {

     // Aquí se define los datos productos para los combos.
     public productosCombos: { [key: string]: Object; }[] = [
          { Title: 'Id: 01 / Silla grande', id: '01' },
          { Title: 'Id: 02 / Juego de sala', id: '02' },
          { Title: 'Id: 03 / Mesa', id: '03' }       
      ];
      // Mapeo para el combobox.
      public localFields: Object = { text: 'Title', value: 'id' };

      public localWaterMark: string = 'Seleccionar productos';
      public value: string[] = [];
    


//Muebles en construcción
  muebles = [
    {
      title: 'Silla',
      id: '01',
      description: 'Ejemplo de texto hablando del mueble.',
      muebleProgress: '25'
    },
    {
      title: 'Mesa',
      id: '02',
      description: 'Ejemplo de texto hablando del mueble.',
      muebleProgress: '45'
    }
  ];

  //Productos de inventario mostrado
  productos = [
    {
      title: 'Silla grande',
      id: '01',
      material: 'X y Y.',
      price: '$60',
      imagen: 'https://static01.nyt.com/images/2015/05/24/realestate/20150524FURNITURE-slide-LKP3/20150524FURNITURE-slide-LKP3-master1050.jpg'
    },
    {
      title: 'Juego Sala',
      id: '02',
      material: 'X y Y.',
      price: '$370',
      imagen: 'https://static01.nyt.com/images/2015/05/24/realestate/20150524FURNITURE-slide-LKP3/20150524FURNITURE-slide-LKP3-master1050.jpg'
    },
    {
      title: 'Mesa',
      id: '03',
      material: 'X y Y.',
      price: '$100',
      imagen: 'https://static01.nyt.com/images/2015/05/24/realestate/20150524FURNITURE-slide-LKP3/20150524FURNITURE-slide-LKP3-master1050.jpg'
    }
  ];

//Promociones existentes
promos = [
  {
    title: 'Sillas de verano',
    id: 'PR01',
    muebleType: 'Sillas de playa',
    discountPercent: '70%',
    muebleProgress: '10 días',
    state: 'Activa'
  },
  {
    title: 'Mesas de verano',
    id: 'PR02',
    muebleType: 'Mesas de playa',
    discountPercent: '40%',
    muebleProgress: '10 días',
    state: 'Desactivada'
  }
];

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

  agregarProductoACombo(){

  }

  crearPromo(){
   // this.promos.push();
  }

  activarPromo(i){
    this.promos[i].state = 'Activa'
  }

  desactivarPromo(i){
    this.promos[i].state = 'Desactivada'
  }


}
