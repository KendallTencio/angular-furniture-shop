import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-manage',
  templateUrl: './general-manage.component.html',
  styleUrls: ['./general-manage.component.css']
})
export class GeneralManageComponent implements OnInit {

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

  productos = [
    {
      title: 'Silla grande',
      id: '01',
      material: 'X y Y.',
      price: '$60',
      imagen: 'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg'
    },
    {
      title: 'Juego de sala',
      id: '02',
      material: 'X y Y.',
      price: '$370',
      imagen: 'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg'
    },
    {
      title: 'Mesa victoriana',
      id: '03',
      material: 'X y Y.',
      price: '$100',
      imagen: 'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg'
    }
  ];

  constructor() { 
    

  }

  ngOnInit() {

  }

}
