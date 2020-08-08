import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

//初めまして。私はケンダルです。

  //Productos de catálogo mostrado
  productos = [
    {
      title: 'Silla grande',
      id: '01',
      material: 'X y Y.',
      price: 60,
      imagen: 'https://static01.nyt.com/images/2015/05/24/realestate/20150524FURNITURE-slide-LKP3/20150524FURNITURE-slide-LKP3-master1050.jpg'
    },
    {
      title: 'Juego Sala',
      id: '02',
      material: 'X y Y.',
      price: 370,
      imagen: 'https://static01.nyt.com/images/2015/05/24/realestate/20150524FURNITURE-slide-LKP3/20150524FURNITURE-slide-LKP3-master1050.jpg'
    },
    {
      title: 'Mesa',
      id: '03',
      material: 'X y Y.',
      price: 100,
      imagen: 'https://static01.nyt.com/images/2015/05/24/realestate/20150524FURNITURE-slide-LKP3/20150524FURNITURE-slide-LKP3-master1050.jpg'
    }
  ];

  listaDePedido = [];

  constructor() {}
  url :any;
  imageApears = false;
  feedback=false;
  deuda=false;
  variable=0;

  ngOnInit() {
  }

  agregarProductoAListaPedido(i){
    this.listaDePedido.push(i);
    console.log(this.listaDePedido.length);
  }
  obtenerDatos(){
    this.listaDePedido.forEach(element => {
      this.variable=this.variable+element.price;
    });
    return this.variable;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

}
