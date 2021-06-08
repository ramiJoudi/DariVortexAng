import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import * as $ from "jquery" ;
import { LoginServiceService } from '../loginService/login-service.service';
import { User2 } from './User2';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
@Component({
  selector: 'rl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public ListAdmin: User2[];
  ArnqueP:number
  adminnmb: any;
  clientnumber:any;
  opnumber:any;
  data:number;
  ownernumber:any;
//  ArnquePourC: number;
//   BadWPourC: any;
//   NotSPourC: any;
  u: string;
 user1:User2; user2:User2; user3:User2; user4:User2;

  customColors = [
    {
      name: "Scam",
      value: '#096c80'
    },
    {
      name: "Bad words",
      value: '#096c80'
    },
    {
      name: "Not serious",
      value: '#096c80'
    },]
    
 claimsP=[
    {name:"Scam",
   value:this.AS.ArnquePourC
},
   {name:"Bad words",
  value: this.AS.BadWPourC
},
{name:"Not serious",
value: this.AS.NotSPourC
}    ]
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: string;
  ListUsers: User2[];
// saleData = [
//   { name: "Mobiles", value: 9000 }, { name: "sofa", value: 2300 }, { name: "car", value: 2600 },
//   { name: "Laptop", value: 550 },
//   { name: "AC", value: 1500 },
//   { name: "Headset", value: 1900 },
//   { name: "Fridge", value: 1000 },

//   { name: "telephone", value: 2400 },
//   { name: "chair", value: 2500 },

//   { name: "bike", value: 700 },
//   { name: "aeroplane", value: 2800 }

// ];
  constructor( public AS:AdminService,
    public LS:LoginServiceService,private httpClient:HttpClient) { }
    
  ngOnInit(): void {
  this.getUsers()
    // setTimeout(function() {
	
    // $('.title').fadeOut("slow", function(){
    //    var div = $("<div class='title'>My Dashboard</div>").hide();
    //    $(this).replaceWith(div);
    //    $('.title').fadeIn("slow");
    // });
      
    //   // $(".title").html('My Dashboard');              
    //   }
    //   , 1500);
     
    // $(function(){
    //   setTimeout(function start (){
  
    //     $('.bar').each(function(i){  
    //       var $bar = $(this);
    //       $(this).append('<span class="count"></span>')
    //       setTimeout(function(){
    //         $bar.css('width', $bar.attr('data-percent'));      
    //       }, i*100);
    //     });
      
    //   $('.count').each(function () {
    //       $(this).prop('Counter',0).animate({
    //           Counter: $(this).parent('.bar').attr('data-percent')
    //       }, {
    //           duration: 2000,
    //           easing: 'swing',
    //           step: function (now) {
    //               $(this).text(Math.ceil(now) +'%');
    //           }
    //       });
    //   });
      
    //   }, 500)
    //   $('.bars li .bar').each(function(key, bar){
    //     var percentage = $(this).data('percentage');
    //     $(this).animate({
    //       'height' : percentage + '%'
    //     },1000);
    //   });
    // });
    

    // $(function(){
    //   $('.bars li .bar').each(function(key, bar){
    //     var percentage = $(this).data('percentage');
    //     $(this).animate({
    //       'height' : percentage + '%'
    //     },1000);
    //   });
    // });
    this.arnaquePourCent();
    this.BadWPourCent();
    this.NotSPourCent();
    
    
    this.AdminNmb();
    this.ClientNmb();
    this.ownerNmb();
    this.opNmb();
    this.u=localStorage.getItem('username');
  }
  AdminNmb(){
    this.AS.getNmbAdmin().subscribe((data)=>{
      console.log(data);
      this.adminnmb=data;
    })
  }
  ClientNmb(){
    this.AS.getNmbClinets().subscribe((data)=>{
      console.log(data);
      this.clientnumber=data;
    })
  }
  opNmb(){
    this.AS.getNmbOp().subscribe((data)=>{
      console.log(data);
      this.opnumber=data;
    })
  }
  ownerNmb(){
    this.AS.getNmbOwner().subscribe((data)=>{
      console.log(data);
      this.ownernumber=data;
    })
  }
   
  arnaquePourCent(){
    this.AS.getNumbArnaque().subscribe((data)=>
   { console.log(data);
    this.AS.ArnquePourC=data})
 
  }
  BadWPourCent(){
    this.AS.getNumbBadW().subscribe((data)=>
   ( this.AS.BadWPourC=data))
 
  }
  NotSPourCent(){
    this.AS.getNumbNs().subscribe((data)=>
   ( this.AS.NotSPourC=data))
    
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
   
   this.ListUsers=data;
 
  this.user1= this.ListUsers[this.ListUsers.length-1]
  this.user2= this.ListUsers[this.ListUsers.length-2]
  this.user3= this.ListUsers[this.ListUsers.length-3]
  this.user4= this.ListUsers[this.ListUsers.length-4]
 
 })
  }
}
