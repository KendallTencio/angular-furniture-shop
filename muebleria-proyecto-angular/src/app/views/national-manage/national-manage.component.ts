@Component({
  selector: 'app-national-manage',
  templateUrl: './national-manage.component.html',
  styleUrls: ['./national-manage.component.css']
})
export class NationalManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mesDemanda:String;
  anioDemanda:String;
  montoDemanda:String;

  public static demandaMensual: String;

  establecerDemandaMensual(){
    NationalManageComponent.demandaMensual = "La expectativa de ganancias definida por el gerente nacional para el mes "+this.mesDemanda+" del año "+this.anioDemanda+" es:$"+this.montoDemanda;
    console.log(NationalManageComponent.demandaMensual);
  }

}

