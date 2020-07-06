import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { Property } from 'src/app/models/Property';
import { propertiesList } from 'src/app/helpers/propertiesList';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';

@Component({
  selector: 'rl-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [elementAnimations],
})
export class DetailComponent implements OnInit, AfterViewInit {
  @HostBinding('@elementAnimations') animate;
  animationElement = ANIMATION_ELEMENT;

  id: number;
  property: Property;
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private ui: UiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = parseInt(params['id'], 10);
        this.property = propertiesList.find((p) => p.propertyId === this.id);
      }
    });
  }

  ngAfterViewInit() {
    if (this.router.isActive(this.router.url, true)) {
      this.ui.openState.next('open');
    }
  }

  goBack() {
    this.router.navigateByUrl('listings');
    this.ui.openState.next('closed');
  }
}
