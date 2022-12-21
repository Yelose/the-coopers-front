import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import Jugador from 'src/app/models/jugador';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  formPartida : FormGroup;
  public juego: Jugador;
  public estadisticas: Jugador[];

  constructor(private service: MainService, public fb: FormBuilder) { 
    this.formPartida = this.fb.group({
      nombreJugador: [''],
      eleccionJugador: ['']
    })
  }


  async save(): Promise<void> {
    var formData: any = new FormData();
    formData.append('nombreJugador', this.formPartida.get('nombreJugador').value);
    formData.append('eleccionJugador', this.formPartida.get('eleccionJugador').value);
    await this.service.jugador.CreateJugador(this.juego);
  }

  async ngOnInit() {  }

}
