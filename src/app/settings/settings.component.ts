import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare let $: any;
import Swal from 'sweetalert2';
import { SelectionRange } from 'typescript';
import { AdminService } from '../adminService/admin.service';
import { User2 } from '../dashboard/User2';
import { LoginServiceService } from '../loginService/login-service.service';
import { User } from '../models/User'; 
@Component({
  selector: 'rl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  pwd: string;
  u1:User=new User();
  u:User=new User();
  u0:User=new User();
 E:any;
 P:any;
U:any;
USER:any;
e:any;
n:string;
public ListUsers: User2[];
  submitted = false;
 
  angForm: FormGroup;
  Form: FormGroup;
  listA: User2[]=[];
  m: string;
  mob: number;
  email: string;
  name: string;
selectedFile: File;
imgURL: any;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;
uname:string;
uemail:string;
umobile:number;
private imgSURL='http://localhost:81/image/upload';
  c: string;
  constructor(private AS:AdminService,private LS:LoginServiceService
    ,private fbuilder: FormBuilder,private httpClient : HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.getImage()
    this.retrievedImage=localStorage.getItem('photo');
    this.getUsers()
    this.c=localStorage.getItem('username');
    this.angForm = this.fbuilder.group({
  
      Cpwd: ['', [Validators.required,Validators.minLength(5)]],
      Npwd:['', [Validators.required,Validators.minLength(5)]]
  })

  this.Form = this.fbuilder.group({
  
    Uname: ['', [Validators.required,Validators.minLength(5)]],
    email:['', [Validators.required,Validators.minLength(5)]],
    phone: ['', [Validators.required,Validators.minLength(5)]]
  })
}

get getControl1(){
  return this.Form.controls;
}
get getControl(){
  return this.angForm.controls;
}
  desactivate(){

  }
  removeAc(){   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.AS.deleteUserByUname(localStorage.getItem('username')).subscribe(data=>console.log(),
      ()=> {  localStorage.clear();
      })
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    //   this.delay(2500).then(any=>{
    //     window.location.reload();
    // });
}
  })
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(ms), ms)).then(()=>console.log("fired"));
  }
  ChangePwd()
  {
    $("#addUser").modal("show");
  }
  onSubmit() {
    if(this.angForm.get('Npwd').value!=this.angForm.get('Cpwd').value){
      Swal.fire({
        title: 'Password entered does not conform  !',
        icon: 'error',
        showConfirmButton: false,
        timer: 1700
    }); 
     
    }else{
      this.doChange();
    }
   
  }
  Submit(){ 
    this.u1.username=this.U;
    this.u1.email=this.E;
    this.u1.mobile=this.P;
    this.AS.update(localStorage.getItem('username'),this.u1).subscribe((data)=>
    { Swal.fire({title:"account updated successfully!",
    icon: 'success',
    showConfirmButton: false,
   })})
  }

  doChange(){
 

    this.AS.changePwd(localStorage.getItem('username'),this.angForm.get('Npwd').value).subscribe((data)=>console.log(data),
    (err)=>console.log("failed")  );
    Swal.fire({title:"password updated successfully!",
    icon: 'success',
    showConfirmButton: false,
   })
  }

  
//  getUser(){
// //    this.AS.getUserr(localStorage.getItem('username')).subscribe((data)=>{
// //   this.u.username=data.username;
// //    })
// //  alert(this.u.username);

 
//   this.AS.getAll().subscribe((data: User2[])=>{
//     this.listA=data;
// });  

// // this.mob=this.listA.find(e=>e.username==name).mobile;
 
//  }


 getUsers(){
  this.AS.getAll().subscribe((data: User2[])=>
 {  console.log(data); 
 this.ListUsers=data;
 this.name=localStorage.getItem('username')
this.email= this.ListUsers.find(e=>e.username==this.name).email ;
this.mob=this.ListUsers.find(e=>e.username==this.name).mobile ;
})
 }

public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
}


onUpload() {
  console.log(this.selectedFile);
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
 

  this.httpClient.post(`${this.imgSURL}/${localStorage.getItem('username')}`, uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
       
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
    this.httpClient.get('http://localhost:81/image/get/' + localStorage.getItem('username'))
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        localStorage.setItem('photo',this.retrievedImage);
         
      }
    );
   window.location.reload();

}

getImage() {
  this.httpClient.get('http://localhost:81/image/get/' + localStorage.getItem('username'))
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        localStorage.setItem('photo',this.retrievedImage);
      }
    );
 this.router.navigate(['']);
 this.router.navigate(['settings']);
}

deleteImg(){
  this.httpClient.delete('http://localhost:81/image/delete/' + localStorage.getItem('username'))
  .subscribe(
    res => {
 
      localStorage.removeItem('photo')
    }
  );
}


editName(){
  this.AS.updateUN( localStorage.getItem('username'),this.uname).subscribe((data)=>{
  console.log(data);
 }); localStorage.setItem('username', this.uname);
 Swal.fire({
 
  icon: 'success',
  title: 'Username changed successfully',
  showConfirmButton: false,
  timer: 1500
})
window.location.reload();}

editMail(){
this.AS.updateUE( localStorage.getItem('username'),this.uemail).subscribe((data)=>{
  console.log(data);
 });
 Swal.fire({
 
  icon: 'success',
  title: 'Email changed successfully',
  showConfirmButton: false,
  timer: 1500
}) ; window.location.reload(); }

editMobile(){
  this.AS.updateUM( localStorage.getItem('username'),this.umobile).subscribe((data)=>{
    console.log(data);});
    Swal.fire({
 
      icon: 'success',
      title: 'Mobile changed successfully',
      showConfirmButton: false,
      timer: 1500
    })
    window.location.reload();}
}
 