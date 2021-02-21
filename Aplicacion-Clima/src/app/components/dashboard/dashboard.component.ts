import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciudad: string = ''
  temperatura = 0
  humedad = 0
  clima = 0
  query = false
  loading = false
  mostrarError = false

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    this.query = false
    this.loading = true
    this.climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false
      this.query = true
      this.temperatura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    }, error => {
      this.loading = false
      this.error()
    })
 }


 error(){
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError= false
      this.ciudad = ''
    }, 3000);
 }

}
