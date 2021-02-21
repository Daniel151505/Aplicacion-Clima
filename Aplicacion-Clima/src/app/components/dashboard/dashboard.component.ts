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

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima(){
    this.climaService.getClima(this.ciudad).subscribe(data => {

    })
 }

}
