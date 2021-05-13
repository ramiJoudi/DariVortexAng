import { Component, OnInit } from '@angular/core';
import * as $ from "jquery" ;
import Swal from 'sweetalert2';
import { AdminService } from '../adminService/admin.service';
import { LoginServiceService } from '../loginService/login-service.service';
import { Claim } from './Claim';
import { ClaimType } from './enumSubj';

@Component({
  selector: 'rl-user-claim',
  templateUrl: './user-claim.component.html',
  styleUrls: ['./user-claim.component.scss']
})
export class UserClaimComponent implements OnInit {
E:string;
S:string;
claim:Claim=new Claim();
Arnaque:ClaimType.Arnaque;
badwords:ClaimType.BadWords;
nots:ClaimType.NotSerious;
  constructor(private AS:AdminService,private LS:LoginServiceService) { }

  ngOnInit(): void {
  
  }

  Submit(){
   this.claim.description=this.E;
   if(this.S=="BadWords")
   { this.claim.claimSubject="BadWords";
    this.claim.description=this.E;
   this.AS.addClaim(localStorage.getItem('username'),this.claim).subscribe((data)=>{console.log(data)
  })}
  else if(this.S=="Arnaque"){ 
this.claim.claimSubject="Arnaque";
    this.claim.description=this.E;
   this.AS.addClaim(localStorage.getItem('username'),this.claim).subscribe((data)=>{console.log(data)
    })} 
    else if(this.S=="NotSerious"){ 
    this.claim.claimSubject="NotSerious";
    this.claim.description=this.E;
   this.AS.addClaim(localStorage.getItem('username'),this.claim).subscribe((data)=>{console.log(data)
    })}
    this.Sweetalert();
}  
  

Sweetalert(){
  Swal.fire({
    title: 'Claim sent successfully!',
    imageUrl: '../assets/cl.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
}
}
