import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contract } from './contract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  addContract(contract: Contract) : Observable<any>{
    return this.http.post('http://localhost:8091/addcontract', contract);
  }

  getContracts() : Observable<any>{
    return this.http.get('http://localhost:8091/contract');
  }

  getContractById(Contractnum: number) : Observable<any>{
    return this.http.get('http://localhost:8091/contract' + Contractnum);
  }

  updateContract(Contractnum: number) : Observable<any>{
    return this.http.get('http://localhost:8091/' + Contractnum);
  }

  deleteContract(Contractnum: number): Observable<Contract[]>{
    return this.http.delete<Contract[]>('http://localhost:8091/deletecontract' + Contractnum);
  }

}
