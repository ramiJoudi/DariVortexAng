import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from './subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  addSubscription(subscription: Subscription): Observable<any> {
    return this.http.post('http://localhost:8091/api/addSubscription', subscription);
  }

  getSubscription(): Observable<any> {
    return this.http.get('http://localhost:8091/api/subpric');
  }

  updateSubscription(idSub: number) : Observable<any>{
    return this.http.get('http://localhost:8091/api/update' + idSub);
  }

  deleteSubscription(idSub: number) : Observable<Subscription[]>{
    return this.http.delete<Subscription[]>('http://localhost:8091/api/delete' + idSub);
  } 
}
