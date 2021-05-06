import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Property} from './models/Property';


@Injectable({
  providedIn: 'root'
})
export class SearchBuyRentService {

  constructor(private http: HttpClient) { }

  public search(propertyAddress){
    return this.http.get('http://localhost:8090/state/search/' + propertyAddress);

  }

  public Payment(propertyId){
    return this.http.post('http://localhost:8090/paypal/makepay/', propertyId);

  }
public doRegistration(deposit){
  return this.http.post('http://localhost:8090/deposit/addeposit', deposit, {responseType: 'text' as 'json'});
}
}
