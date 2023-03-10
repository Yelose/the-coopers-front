import { Injectable } from '@angular/core';
import Jugador from '../models/jugador';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
  public service: MainService;

  public async GetJugadores(): Promise<Jugador[]> {
    return await this.service.HttpGet('/estadisticas');
  }

  public CreateJugador(jugador: Jugador): Promise<Jugador> {
    return this.service.HttpPost('/juego', jugador);
  }
  
  // public async GetJugador(id: number): Promise<Jugador> {
  //   return await this.service.HttpGet(`/juego/${id}`);
  // }
  // public async SearchJugadores(text: string): Promise<Jugador[]> {
  //   return await this.service.HttpGet(`/buscar/${encodeURIComponent(text)}`);
  // }
  // public async UpdateJugador(jugador: Jugador): Promise<Jugador> {
  //   return await this.service.HttpPut(`/estadisticas/${jugador.id}`, jugador);
  // }
  // public async DeleteJugador(id: number): Promise<{ message: string }> {
  //   return await this.service.HttpDelete(`/estadisticas/${id}`);
  // }

  constructor() {}
}
