import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
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
          transform: 'translateX(80px)',
          visibility: 'hidden',
        })
      ),
      transition('closed => open', [animate('0.4s ease-out')]),
      transition('open => closed', [animate('0.1s ease-out')]),
    ]),
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject<void>();
  menuList = menuList;
  propertiesList = propertiesList;
  openState: OpenState;
  menuLink: string;

  constructor(
    public ui: UiService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.ui
      .getOpenState()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((openState: OpenState) => {
        this.openState = openState;
        this.cdr.detectChanges();
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
