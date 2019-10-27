import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HostListenerScrollService {
  scrollPositionYSubject = new Subject<number>();

  constructor() { }
}
