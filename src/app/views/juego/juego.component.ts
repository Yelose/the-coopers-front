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

  constructor(private service: MainService, public fb: FormBuilder) { 
    this.formPartida = this.fb.group({
      nombreJugador: ['Jugador'],
      eleccionJugador: ['1']
    })
  }

   save() : void {
    this.juego = this.formPartida.value;
    this.service.jugador.CreateJugador(this.juego).then((jugador : Jugador)=>{
      console.log(jugador);
      this.juego = jugador;
    })
  }

  async ngOnInit() {}
}
