import { Component, OnInit, HostBinding } from '@angular/core';
import { propertiesList } from 'src/app/helpers/propertiesList';
import { UiService } from 'src/app/services/ui.service';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';
import { timer } from 'rxjs';
import { Property } from 'src/app/models/Property';

@Component({
  selector: 'rl-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  animations: [elementAnimations],
})
export class ListingsComponent implements OnInit {
  @HostBinding('@elementAnimations') animate;

  animationElement = ANIMATION_ELEMENT;
  propertiesList: Property[] = [];
  constructor(public ui: UiService) {}

  ngOnInit(): void {
    timer(1000).subscribe((_) => {
      this.propertiesList = propertiesList;
    });
  }

  searchListings(event) {}

  onNavigate() {
    this.ui.openState.next('open');
  }
}
