import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginServiceService } from '../loginService/login-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let $: any;
@Component({
  selector: 'rl-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.scss']
})
export class ResetPWDComponent implements OnInit {
un:string;
angForm: FormGroup;
code:string;
  constructor( private LS:LoginServiceService   ,private fbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.angForm = this.fbuilder.group({
  
      Cpwd: ['', [Validators.required,Validators.minLength(5)]],
      Npwd:['', [Validators.required,Validators.minLength(5)]]
  })
  }
  entreUserN(){
this.LS.resetSendCode(this.un).subscribe((data)=>console.log(data));
$("#code").modal("show")
    // $("#addUser").modal("show");code
  }
  get getControl(){
    return this.angForm.controls;
  }
  okcode(){
 this.LS.findCode(this.code).subscribe(data=>{console.log(data);
  $("#addUser").modal("show")
  $("#code").modal("hide")

},(error)=>{Swal.fire({
  icon: 'error',
  text: 'Invalid code!',
})})  
  }


  change(){                 
    this.LS.changePwdFm(this.code,this.angForm.get('Npwd').value).subscribe((data)=>{
      console.log(data);
      localStorage.clear();
      window.location.reload();
    },(error)=>(console.log(error)))
  }
}
