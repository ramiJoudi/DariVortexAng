import { Component, OnInit, HostBinding, NgModule } from '@angular/core';
import { propertiesList } from 'src/app/helpers/propertiesList';
import { UiService } from 'src/app/services/ui.service';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';
import { RouterModule } from '@angular/router';
import { AdminBoardComponent } from 'src/app/admin-board/admin-board.component';
import {  } from '../../app-routing.module';
@Component({
  selector: 'rl-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  animations: [elementAnimations],
})

export class ListingsComponent implements OnInit {
  @HostBinding('@elementAnimations') animate;
  animationElement = ANIMATION_ELEMENT;

  propertiesList = propertiesList;

  constructor(public ui: UiService) {}

  ngOnInit(): void {}

  animationDone(event) {
    (event.element as HTMLDivElement).childNodes.forEach((item) => {
      const node = item as HTMLDivElement;
      if (node.classList && node.classList.contains('active')) {
        node.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  onNavigate() {
    this.ui.openState.next('open');
  }
}
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

