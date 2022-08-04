import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';

  ciudad: string;
  temperatura: number = 0;
  humedad: number = 0;
  clima: string = '';
  query: boolean = false;
  loading: boolean = false;
  showError: boolean = false;

  constructor(private _climaService: ClimaService) {
    this.ciudad = '';
  }

  ngOnInit(): void {}

  obtenerClima() {
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(
      (data) => {
        this.loading = false;
        this.query = true;
        this.temperatura = data.main.temp - 273;
        this.humedad = data.main.humidity;
        this.clima = data.weather[0].description;
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.mostrarError();
      }
    );
  }

  mostrarError() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
      this.ciudad = '';
    }, 3000);
  }
}
