import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Property} from "./models/Property";

interface  Sate{
  status: number,
  location:string,
  purchasing_price: number,
  buy: true ,
  rent: false
}
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

}
