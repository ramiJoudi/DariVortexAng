import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { User2 } from '../dashboard/User2';
import { LoginServiceService } from '../loginService/login-service.service';
import { User } from '../models/User';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Claim } from '../user-claim/Claim';
 
export type OpenState = 'open' | 'closed';
@Injectable({
  providedIn: 'root'
})


export class AdminService {
  
 
  openState = new BehaviorSubject<OpenState>('closed');
  getOpenState(): Observable<string> {
    return this.openState.asObservable();
  }
  constructor(private http : HttpClient,private LS:LoginServiceService) { }
  private deleteURL ="http://localhost:81/delete";
  private deleteeURL ="http://localhost:81/deletee";
  private resetSURL ="http://localhost:81/login/resetpwds"; 
  private updateURL ="http://localhost:81/update"; 
  private ClaimURL ="http://localhost:81/upadate/addClaim"; 
  private updatePhoto ="http://localhost:81/upadate/upadatePhoto"; 
  private getUser ="http://localhost:81/get"; 
  claim:Claim;
  ArnquePourC:number;
  BadWPourC:number;
  NotSPourC:number;
    //    return this.http.get("http://localhost:81/loginUser",{headers,responseType: 'text' as 'json'})
  getNmbAdmin(): Observable<any> {
 
    return this.http.get("http://localhost:81/dashboard/Cadmins" ); 
  }
  getNmbClinets(): Observable<any> {
   
    return this.http.get("http://localhost:81/dashboard/Cclients" ); 
  }
  getNmbOwner(): Observable<any> {
 
    return this.http.get("http://localhost:81/dashboard/Cowner" ); 
  }
  getNmbOp(): Observable<any> {
    
    return this.http.get("http://localhost:81/dashboard/Cop" ); 
  }

  getNumbArnaque(): Observable<any> {
    return this.http.get("http://localhost:81/dashboard/arnaquePourc"); 
  }
  getNumbBadW(): Observable<any> {
   
    return this.http.get("http://localhost:81/dashboard/BadWordsPourc"); 
  }
  getNumbNs(): Observable<any> {
    return this.http.get("http://localhost:81/dashboard/NotseriousPourc"); 
  }
  getAdmins(): Observable<any> {
 
    return this.http.get<any>("http://localhost:81/admins"); 
  }
  getCstmr(): Observable<any> {
 
    return this.http.get<any>("http://localhost:81/customers"); 
  }
  getow(): Observable<any> {
 
    return this.http.get<any>("http://localhost:81/ops"); 
  }
  getop(): Observable<any> {
 
    return this.http.get<any>("http://localhost:81/ow"); 
  }
  getAll(): Observable<any> {
 
    return this.http.get<any>("http://localhost:81/users"); 
  }
  deleteUser( id:number):Observable<User2[]> {
 
    return this.http.delete<User2[]> (`${this.deleteURL}/${id}`); 
  }
  
  deleteUserByUname( uname:string):Observable<User2[]>  {
    return this.http.delete<User2[]> (`${this.deleteeURL}/${uname}`); 
  }
  changePwd(name:string , pwd:string):Observable<any> {
 
    return this.http.put( `${this.resetSURL}/${name}`,pwd); 
  }
 
  update(name:string , user:User):Observable<any> {
 
    return this.http.post( `${this.updateURL}/${name}`,user); 
  }

  addClaim(name:string,claim:Claim ){
    return this.http.post( `${this.ClaimURL}/${name}`,claim);
  }

  updatePh(name:string,imageUrl:string ){
    return this.http.put( `${this.updatePhoto}/${name}`,imageUrl);
  }
  

 getuname( name:string):Observable<string>{
  return this.http.get<string>( `${this.getUser}/name/${name}`);
 }

 updateUN(name:string , uname:string):Observable<any> {
 
  return this.http.get( `${this.updateURL}/uname/${name}/${uname}`); 
}
updateUE(name:string , email:string):Observable<any> {
 
  return this.http.get( `${this.updateURL}/email/${name}/${email}`); 
}
updateUM(name:string , mobile:number):Observable<any> {
 
  return this.http.get( `${this.updateURL}/mobile/${name}/${mobile}`); 
}
}
 