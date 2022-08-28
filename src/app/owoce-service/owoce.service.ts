import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OwoceService {

  constructor() { }

  getOwoce():string[]{
    return ['Jablko', 'Gruszka', 'Ananas', 'Malina'];
  }
}
