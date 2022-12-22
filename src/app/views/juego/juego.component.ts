import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import formOption from 'src/app/models/formOptionsModel';
import Jugador from 'src/app/models/jugador';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  public formPartida : FormGroup;
  public juego: Jugador;
  public formOptions: formOption[];
  constructor(private service: MainService, public fb: FormBuilder) { 
    this.formOptions= [
      {for: "piedra", value: 1, img: "/assets/img/piedra.png"},
      {for: "papel", value: 2, img: "/assets/img/papel.png"},
      {for: "tijera", value: 3, img: "/assets/img/tijera.png"},
      {for: "lagarto", value: 4, img: "/assets/img/lagarto.png"},
      {for: "spock", value: 5, img: "/assets/img/spock.png"}
    ];
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
