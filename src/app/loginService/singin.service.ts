import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SinginService {

  constructor(private http : HttpClient,private router: Router) { }
 
  addUser(User: any){
     return this.http.post('http://localhost:81/singin/admin', User).pipe(map(
    
         (data)=>{
           this.router.navigate(['/email-verif',User.email]);
         },(error)=>{
           alert("this mail already exists");
         }
       
     ))
   }
 
}
