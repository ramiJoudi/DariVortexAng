import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
 
import { LoginServiceService } from '../loginService/login-service.service';
import { TokenStorageService } from '../loginService/token-storage.service';
 
 
import {User} from '../models/User';

@Component({
  selector: 'rl-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {
  angForm: FormGroup;
  errorMessage = 'This email already exists!';
  errorMessage1=' password entered does not conform '
  successMessage: string;
  invalidLogin = false;
  invalidMail = false;
  invalidCpwd =false;
  loginSuccess = false;
  Cpwd:string;
  s:boolean=false;
  s1:boolean=false;
  currentUser: any;
 u:string;
  U: User = new User();
  U2: User = new User();
  private _document: any;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: string;
  
  constructor(public LS:LoginServiceService ,private route: ActivatedRoute,
    private router: Router,private fbuilder: FormBuilder, private tokenStorage: TokenStorageService,private httpClient : HttpClient) {
     
     }
  
 

  ngOnInit(): void {
   
    document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	})





  this.angForm = this.fbuilder.group({
    Uname: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    pwd: ['', [Validators.required,Validators.minLength(5)]],
    Cpwd: ['', [Validators.required]],
    role:['', [Validators.required]],
  })  


 
  }

  
  get getControl(){
    return this.angForm.controls;
  }
  
  dologin(){

 this.LS.login(this.U2.username, this.U2.pwd).subscribe((data)=> {
  this.getImage();   
  this.tokenStorage.saveToken(data.accessToken);
      // this.access();
      console.log(data);
      this.LS.role=data;
      this.LS.Upass=this.U2.pwd;
      localStorage.setItem('username',this.U2.username);
      this.LS.Ulogin=localStorage.getItem('username');
      this.navigateByRole(this.LS.role);
      this.LS.isLogedIn=true;
      localStorage.setItem('isLogedIn','true');
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.httpClient.get('http://localhost:81/image/get/' + localStorage.getItem('username'))
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          localStorage.setItem('photo',this.retrievedImage);
        }
      );
    
     
     this.s1=true;
    }, () => {
      Swal.fire({
        title: 'Invalid credentials !',
        icon: 'error',
        showConfirmButton: false,
        timer: 1600
    });      
    this.LS.isLoginFailed = true;
    }) 
  }
  navigateByRole(role:string) {
    if(role==="ADMIN")
     {
      //  this.LS.showAdminBoard=true;
      localStorage.setItem('Board','admin');
      this.router.navigate(['/dashboard']);
      window.location.reload();

  }
    else if(role==="CUSTOMER") 
   {   localStorage.setItem('Board','client');
    this.router.navigate(['/listings']);
    window.location.reload();}
    else if(role==="OWNER") 
    this.LS.showOwnerBoard=true;
    else if(role==="OPERATOR") 
    this.LS.showOpBoard=true;
    // this.router.navigate(['/listings']);
  }
  onsubmit(){
    if(this.angForm.get('pwd').value==this.angForm.get('Cpwd').value){
         
          if(this.angForm.get('role').value==1){
            this.singupA();
          }else if(this.angForm.get('role').value==2) {
            this.singupC();
          }else if(this.angForm.get('role').value==3) {
            this.singupOw();
          }
          else if(this.angForm.get('role').value==4) {
            this.singupOp();
          }

    }else {
      Swal.fire({
        title: 'Password entered does not conform  !',
        icon: 'error',
        showConfirmButton: false,
        timer: 1700
    }); 
    }
  }
  async singupA():Promise<void>{ 
  this.U={
    "username":this.angForm.get('Uname').value,
    "firstname":"",
    "lasttname":"",
    "email":this.angForm.get('email').value,
    "pwd":this.angForm.get('pwd').value,
    "mobile":this.angForm.get('phone').value,
  "imgUrl":"",
  }
this.LS.addAdmin(this.U).subscribe( 
(data)=>{
 console.log(data);
 this.gotoVemail(this.U.email);
}

);this.alert();
}


async singupC():Promise<void>{ 
  this.U={
    "username":this.angForm.get('Uname').value,
    "firstname":" ",
    "lasttname":" ",
    "email":this.angForm.get('email').value,
    "pwd":this.angForm.get('pwd').value,
    "mobile":this.angForm.get('phone').value,
    "imgUrl":"",
  }
this.LS.addClient(this.U).subscribe( 
(data)=>{
 console.log(data);
 this.gotoVemail(this.U.email);
}

);this.alert();
}

async singupOw():Promise<void>{ 
  this.U={
    "username":this.angForm.get('Uname').value,
    "email":this.angForm.get('email').value,
    "pwd":this.angForm.get('pwd').value,
    "mobile":this.angForm.get('phone').value,
    "firstname":" ",
    "lasttname":" ",
    "imgUrl":"",
  }
this.LS.addOwner(this.U).subscribe( 
(data)=>{
 console.log(data);
 this.gotoVemail(this.U.email);
}

);this.alert();
}

async singupOp():Promise<void>{ 
  this.U={
    "username":this.angForm.get('Uname').value,
    "email":this.angForm.get('email').value,
    "pwd":this.angForm.get('pwd').value,
    "mobile":this.angForm.get('phone').value,
    "firstname":" ",
    "lasttname":" ",
    "imgUrl":"",
  }
  
this.LS.addOperator(this.U).subscribe( 
(data)=>{
 console.log(data);
 this.gotoVemail(this.U.email);
}

);this.alert();
}


  async alert(){
  
const { value: accept } = await Swal.fire({
  title: 'Terms and conditions',
  input: 'checkbox',
  inputValue: 1,
  inputPlaceholder:
    'I agree with the terms and conditions',
  confirmButtonText:
    'Continue&nbsp;<i class="fa fa-arrow-right"></i>',
  inputValidator: (result) => {
    return !result && 'You need to agree with T&C'
  }
})

if (accept) {
  Swal.fire({title:"Complete Registration!",
   text: 'A verification email has been sent to '+this.U.email,
   icon: 'success',
   showConfirmButton: false,
  })
  this.delay(2500).then(any=>{
    window.location.reload();
});

}
}
async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(ms), ms)).then(()=>console.log("fired"));
}
 
 
  gotoVemail(email:string) {
    this.router.navigate(['/email-verif',email]);
  }


// access(){
//   if(localStorage.getItem('isLogedIn')=='true'){
//     this.LS.isLogedIn=true;
//     if(localStorage.getItem('Board')=='admin')
//     {
//       this.LS.showAdminBoard=true;
//     }
// }
// 
getImage() {
  this.httpClient.get('http://localhost:81/image/get/' + localStorage.getItem('username'))
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

      }
    );

}
forgotred(){
  localStorage.setItem('forgetAcc','true');
  this.router.navigate(['/Reset']);
 window.location.reload();
}


}


