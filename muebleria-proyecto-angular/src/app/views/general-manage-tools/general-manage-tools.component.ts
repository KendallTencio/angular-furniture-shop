import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';// import Jquery here  
// import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-general-manage-tools',
  templateUrl: './general-manage-tools.component.html',
  styleUrls: ['./general-manage-tools.component.css']
})
export class GeneralManageToolsComponent implements OnInit {
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
message = "";
errorFlag =false;
errorFlag2 =false;




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
muebleProgress: '78'
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
validTime: '10 días',
state: 'Activa'
},
{
title: 'Mesas de verano',
id: 'PR02',
muebleType: 'Mesas de playa',
discountPercent: '40%',
validTime: '10 días',
state: 'Desactivada'
}
];
  //Input de promoción nueva
nombrePromoInput:string;
muebleTipoInput:string;
porceDescInput:string;
duracionInput:string;


  constructor() { }

  ngOnInit() {
  }

  
  agregarProductoACombo(){

  }

  crearPromocion(){
    this.promos.push({title: this.nombrePromoInput, 
                      id:'PR0'+(this.promos.length+1), 
                      muebleType: this.muebleTipoInput, 
                      discountPercent: this.porceDescInput, 
                      validTime: this.duracionInput,
                      state: 'Activa'}
                    );
  }

  activarPromo(i){
    this.promos[i].state = 'Activa'
  }

  desactivarPromo(i){
    this.promos[i].state = 'Desactivada'
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open();

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  changeMessage(message :string){
    this.message = message;
    this.errorFlag = !this.errorFlag;
    
    setTimeout(()=>{
      this.errorFlag = !this.errorFlag;
     
    },2000)
  }
  changeMessageCombo(){
    
    setTimeout(()=>{
      this.errorFlag2 = !this.errorFlag2;
     
    },2000)
  }
}