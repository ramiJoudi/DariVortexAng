import { Pipe, PipeTransform } from '@angular/core';
import { User2 } from './dashboard/User2';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

 
  transform(userlist: User2[], searchValue: string){
          if(!userlist || !searchValue){
              return userlist;
          }return userlist.filter(u=> u.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
           u.role.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
          u.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        }

}
// import { Component, OnInit } from '@angular/core';
// import { AdminService } from '../adminService/admin.service';
// import { User2 } from '../dashboard/User2';
// import{Pipe,PipeTransform} from '@angular/core';
 

// @Pipe({
//     name:'searchFilter'
// })

// export class searchFilter implements PipeTransform{
//     transform(userlist: User2[], searchValue: string) :User2[]{
//       if(!userlist || !searchValue){
//           return userlist;
//       }return userlist.filter(u=> u.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
//     }

// }