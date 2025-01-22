import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinionService {

  private url: string = "http://localhost:3000/minions";

  constructor(private httpClient: HttpClient) { }


  getMinions(): Observable<Minion[]> {
    return this.httpClient.get<Minion[]>(this.url);
  }

  // filterMinions(search: string) {
  //   return this.minions.filter(minion => minion.name.toLowerCase().includes(search.toLowerCase()));
  // }


}
