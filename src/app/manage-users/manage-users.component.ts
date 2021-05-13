import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import { User2 } from '../dashboard/User2';
import * as $ from "jquery" ;
import { role } from './role';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../loginService/login-service.service';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';

import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'rl-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  public ListUsers: User2[];
  public ListAdmin: User2[];
  public ListCstms: User2[];
  public Listows: User2[];
  public Listops: User2[];
  adminrole=false;
  ownerrole=false;
  oprole =false;
  cstmrrole=false;
  mySelect:any;
  selectedValue:any
  selValue
  searchValue:string;
  p:number=1;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: string;
  constructor(private AS:AdminService,private route: ActivatedRoute,private router: Router
    ,public LS:LoginServiceService,private cdRef: ChangeDetectorRef,private httpClient:HttpClient) { }

  ngOnInit(): void {
 
    this.getAdmins();
    // this.ChangeValue();
    this.getUsers();
    this.getcstmrs();
    this.getops();
    this.getows();
    // $(document).ready(function(){
    //   $('[data-toggle="tooltip"]').tooltip();
    // });
    // this.mdbTable.setDataSource(this.elements);
    // this.elements = this.mdbTable.getDataSource();
    // this.previous = this.mdbTable.getDataSource();
  }


  
  getAdmins(){
    this.AS.getAdmins().subscribe((data: User2[])=>
   {  console.log(data);
    
   this.ListAdmin=data;
 })
  }
  getUsers(){
    this.AS.getAll().subscribe((data: User2[])=>
   {  console.log(data);
    data.forEach((u)=>{ 
      this.httpClient.get('http://localhost:81/image/get/' + u.username)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          u.img=this.retrievedImage ;
        }
      );
    });
    
    this.ListAdmin=null;
   this.ListUsers=data;
 })
  }
  getcstmrs(){
    this.AS.getCstmr().subscribe((data: User2[])=>
   {  console.log(data);
   this.ListCstms=data;
 })
  }
  getows(){
    this.AS.getow().subscribe((data: User2[])=>
   {  console.log(data);
   this.Listows=data;
 })
  }
  getops(){
    this.AS.getop().subscribe((data: User2[])=>
   {  console.log(data);
   this.Listops=data;
 })
  }
  selectRole(){
    if(this.mySelect==null){
      console.log(" ");
    }else if(this.mySelect==1){
      alert("admin ");
    }}

  //   ChangeValue(){
  //   $("#singleSelectValueDDjQuery").on("change",function(){
  //     //Getting Value
  //     this.selValue = $("#singleSelectValueDDjQuery").val();
  //     //Setting Value
  //     $("#textFieldValueJQ").val(this.selValue);
  //    if(this.selValue=="0"){this.adminrole=true;}
  //    if(this.selValue==1){this.cstmrrole=true;}
  //    if(this.selValue==2){this.ownerrole=true;}
  //    if(this.selValue==3){this.oprole=true;}
  // });


// }
  async delete(id:number){
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.AS.deleteUser(id).subscribe(data=>this.ListUsers=data,
          ()=> this.getUsers()); 
      }
    })
  
}
 
}
