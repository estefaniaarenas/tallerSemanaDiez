import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  pages: number = 1;
  datosApi!: any;
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerDatosApi();
  }

  obtenerDatosApi() {
    this.apiService.obtenerDatos().subscribe(
      (res) => {
        this.datosApi = res.results;
      },
      (err) => console.log(err)
    );
  }
  boton(e:any){
    e.target
    alert("Le enviaste un me gusta a:"+e)
}
}
