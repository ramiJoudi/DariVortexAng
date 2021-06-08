import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isLoginFailed :boolean=false;
  isLogedIn:boolean=false;
  showpage:boolean=true;
  email:string='';
  u:User;
  role:string;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  showAdminBoard: boolean=false;
  showClientBoard:boolean=false;
  showOwnerBoard:boolean=false;
  showOpBoard:boolean=false;
  R: number;
  Upass:string;
   Ulogin:any;
   private SendCode ="http://localhost:81/login/ResetPwd";
    private findcode ="http://localhost:81/findCode";
   private changePwdF="http://localhost:81/login/ResetPwd";
   constructor(private http : HttpClient) { }
 
 
   login(username: string, password: string): Observable<any> {
       const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
       return this.http.get("http://localhost:81/loginUser",{headers,responseType: 'text' as 'json'})
   }
 
    
   addAdmin(User): Observable<any> {
     return this.http.post<User>('http://localhost:81/singin/admin', User);
   }

   addClient(User): Observable<any> {
    return this.http.post<User>('http://localhost:81/singin/customer', User);
  }  
   addOwner(User): Observable<any> {
    return this.http.post<User>('http://localhost:81/singin/owner', User);
  }
     addOperator(User): Observable<any> {
    return this.http.post<User>('http://localhost:81/singin/operator', User);
  }


  resetSendCode(un:string): Observable<any> {
    return this.http.get (`${this.SendCode}/${un}`); 
  }
 findCode(code:string): Observable<any> {
    return this.http.get (`${this.findcode}/${code}`,{responseType: 'text' as 'json'}); 
  }

  changePwdFm(code:string,pwd:string ){
    return this.http.post(`${this.changePwdF}/${code}`,pwd,{responseType: 'text' as 'json'})
  }
   getCurrentUser(): Observable<any> {
    return this.http.get("http://localhost:81/getAthUser",httpOptions); 
  }

 
}
