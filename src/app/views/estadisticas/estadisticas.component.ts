import { Component, OnInit } from '@angular/core';
import Jugador from 'src/app/models/jugador';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  public estadisticas: Jugador[];
  constructor(private service: MainService) { 
    this.estadisticas = []
  }

  async ngOnInit(): Promise<void> {
    this.estadisticas = await this.service.jugador.GetJugadores();
  }

}
