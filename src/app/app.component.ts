import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { LoginServiceService } from './loginService/login-service.service';
import { TokenStorageService } from './loginService/token-storage.service';


@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('detailPage', [
  //     state(
  //       'open',
  //       style({
  //         opacity: 1,
  //         width: '30%',
  //         transform: 'translateX(0)',
  //         visibility: 'visible',
  //       })
  //     ),
  //     state(
  //       'closed',
  //       style({
  //         opacity: 0,
  //         width: '0%',
  //         transform: 'translateX(80px)',
  //         visibility: 'hidden',
  //       })
  //     ),
  //     transition('closed => open', [animate('0.4s ease-out')]),
  //     transition('open => closed', [animate('0.4s ease-out')]),
  //   ]),
  // ],
})
export class AppComponent implements OnInit {
  private role: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  showClientBoard: boolean;
  showAdminOwner: boolean;
  showClientOp: boolean;
  showOwnerBoard: boolean;
  showOpBoard: boolean;
  showForget:boolean;
  constructor(
 
    public LS:LoginServiceService ,
    private tokenStorageService: TokenStorageService
  ) {}
  
  ngOnInit(): void {

    if(localStorage.getItem('isLogedIn')=='true'){
      this.LS.isLogedIn=true;
      if(localStorage.getItem('Board')=='admin')
      {
        this.LS.showAdminBoard=true;
      }
      if(localStorage.getItem('Board')=='client')
      {
        this.LS.showClientBoard=true;
      }
    }
    
    if(localStorage.getItem('forgetAcc')=='true')
    this.showForget=true;


    // this.LS.isLogedIn = !!this.tokenStorageService.getToken();
    
    // if (this.LS.isLogedIn ) {
    //   alert(this.LS.R);
    //     if(this.LS.R===1)
    //     this.showAdminBoard=true;
    //     else if(this.LS.R==2)
    //     this.showClientBoard=true;
    //     else if(this.LS.R==3)
    //     this.showOwnerBoard=true;
    //     else if(this.LS.R==4)
    //     this.showOpBoard=true;
 
       
    // }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
