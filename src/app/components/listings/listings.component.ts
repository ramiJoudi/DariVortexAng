import { Component, OnInit, HostBinding } from '@angular/core';
import { propertiesList } from 'src/app/helpers/propertiesList';
import { UiService } from 'src/app/services/ui.service';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';
import {SearchBuyRentService} from '../../search-buy-rent.service';
import {Property} from '../../models/Property';

interface  Sate{
  status: number;
  location: string;
  purchasing_price: number;
  buy: true ;
  rent: false;
}
@Component({
  selector: 'rl-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
  animations: [elementAnimations],
})
export class ListingsComponent implements OnInit {
  constructor(private  http: SearchBuyRentService, public ui: UiService , private service: SearchBuyRentService) {}
  @HostBinding('@elementAnimations') animate;
  animationElement = ANIMATION_ELEMENT;

  propertiesList = propertiesList;
  loc: Property;
state: any;

  fg  = '';

  ngOnInit(): void {
    const resp = this.service.search(this.loc.propertyAddress);
    resp.subscribe((data: string) => this.loc.propertyAddress = data);


  }





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
