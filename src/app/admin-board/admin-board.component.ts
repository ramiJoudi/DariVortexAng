 import { menuList } from '../helpers/menuList';
import { propertiesList } from '../helpers/propertiesList';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { UiService, OpenState } from '../services/ui.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { gsap } from 'gsap';
import { LoginServiceService } from '../loginService/login-service.service';
import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../adminService/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rl-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit, OnDestroy {
  @ViewChild('nav', { static: true }) nav: ElementRef<HTMLUListElement>;
  @ViewChild('ad', { static: true }) ad: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  @ViewChild('user', { static: true }) user: ElementRef<HTMLDivElement>;
  destroyed$ = new Subject<void>();
  menuList = menuList;
  propertiesList = propertiesList;
  openState: OpenState;
  menuLink: string;
 
  u:any;
  retrievedImage: string;
  retrieveResonse: any;
  base64Data: any;
  constructor(
    public ui: UiService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    public LS:LoginServiceService ,
    private AS:AdminService,
    private httpClient:HttpClient
    ) {}

  ngOnInit() {
    
    this.u=localStorage.getItem('username');
    this.getImage();
    this.retrievedImage=localStorage.getItem('photo');
    this.initAnimations();

    this.ui
      .getOpenState()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((openState: OpenState) => {
        this.openState = openState;
        this.cdr.detectChanges();
      });
  }
 
  initAnimations() {
    gsap.from(this.logo.nativeElement, {
      duration: 0.5,
      opacity: 0,
      x: -20,
      delay: 0.2,
    });
    gsap.from(this.nav.nativeElement, {
      duration: 0.5,
      opacity: 0,
      x: -20,
      delay: 0.3,
    });
    gsap.from(this.ad.nativeElement, {
      duration: 0.5,
      opacity: 0,
      x: -20,
      delay: 1,
    });
    gsap.from(this.user.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.4,
    });
  }

  onNavigate(link: string) {
    if (this.router.url.startsWith('/listings') && link !== '/listings') {
      this.ui.openState.next('closed');
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  AdminNmb(){
    this.AS.getNmbAdmin().subscribe((data)=>{
      console.log(data);
    })
  }
    menuToggle(){
    const toggleMenu=document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
  }
  logout(){
    localStorage.clear();
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
 
  }
}