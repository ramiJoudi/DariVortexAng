import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type OpenState = 'open' | 'closed';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  openState = new BehaviorSubject<OpenState>('closed');

  getOpenState(): Observable<string> {
    return this.openState.asObservable();
  }
}
