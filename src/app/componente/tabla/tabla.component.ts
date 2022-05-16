import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

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




}
