import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { menuList } from './helpers/menuList';
import { propertiesList } from './helpers/propertiesList';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { UiService, OpenState } from './services/ui.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { gsap } from 'gsap';

@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('detailPage', [
      state(
        'open',
        style({
          opacity: 1,
          width: '30%',
          transform: 'translateX(0)',
          visibility: 'visible',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          width: '0%',
          transform: 'translateX(80px)',
          visibility: 'hidden',
        })
      ),
      transition('closed => open', [animate('0.4s ease-out')]),
      transition('open => closed', [animate('0.4s ease-out')]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('nav', { static: true }) nav: ElementRef<HTMLUListElement>;
  @ViewChild('ad', { static: true }) ad: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  @ViewChild('user', { static: true }) user: ElementRef<HTMLDivElement>;
  destroyed$ = new Subject<void>();
  menuList = menuList;
  propertiesList = propertiesList;
  openState: OpenState;
  menuLink: string;
  title: string;

  constructor(
    public ui: UiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
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

}
