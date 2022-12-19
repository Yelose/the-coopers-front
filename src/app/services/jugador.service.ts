import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
  public service: MainService;

  public async GetJugadores(): Promise<Jugador[]> {
    return await this.service.HttpGet('/jugadores');
  }

  public async SearchJugadores(text: string): Promise<Jugador[]> {
    return await this.service.HttpGet(`/buscar/${encodeURIComponent(text)}`);
  }
  public async GetJugador(id: number): Promise<Jugador> {
    return await this.service.HttpGet(`/jugadores/${id}`);
  }

  public async CreateJugador(jugador: Jugador): Promise<Jugador> {
    return await this.service.HttpPost('/jugadores', jugador);
  }

  public async UpdateJugador(jugador: Jugador): Promise<Jugador> {
    return await this.service.HttpPut(`/jugadores/${jugador.id}`, jugador);
  }

  public async DeleteJugador(id: number): Promise<{ message: string }> {
    return await this.service.HttpDelete(`/jugadores/${id}`);
  }

  constructor() {}
}
