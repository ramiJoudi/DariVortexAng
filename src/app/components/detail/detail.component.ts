import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { Property } from 'src/app/models/Property';
import { propertiesList } from 'src/app/helpers/propertiesList';
import {HttpClient} from '@angular/common/http';
import {
  elementAnimations,
  ANIMATION_ELEMENT,
} from 'src/app/animations/elementAnimations';
import { gsap } from 'gsap';
import {SearchBuyRentService} from '../../search-buy-rent.service';

@Component({
  selector: 'rl-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [elementAnimations],
})
export class DetailComponent implements OnInit, AfterViewInit {
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    public ui: UiService ,
    private services: SearchBuyRentService,
    private  http: HttpClient ,

  ) {}
  @HostBinding('@elementAnimations')
  id: number;


  animationElement = ANIMATION_ELEMENT;
  @ViewChild('info', { static: true }) info: ElementRef<HTMLDivElement>;
  @ViewChild('back', { static: true }) back: ElementRef<HTMLAnchorElement>;
  @ViewChild('image', { static: true }) image: ElementRef<HTMLDivElement>;
  @ViewChild('call', { static: true }) call: ElementRef<HTMLButtonElement>;

  property: Property;

  url = 'http://localhost:8090';
  tg = false ;

  ngOnInit(): void {
    this.initDetailAnimations();
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = parseInt(params.id, 10);
        this.property = propertiesList.find((p) => p.propertyId === this.id);
      }
    });


  }

  rayM() {
    console.log(this.property.propertyId);
    const req = this.services.Payment(this.property.propertyId);
    req.subscribe((data: any) => {
      console.log(data);
      this.router.navigate([data.redirect_url]);

    });


  }
    makePayment(sum) {


    return this.http.post(this.url + 'paypal/make/payment?sum=' + sum, {})
        .subscribe((response: Response) => {

          response.json();

          alert(response.json());




        });
    }





  initDetailAnimations() {
    gsap.from(this.back.nativeElement, {
      duration: 0.5,
      opacity: 0,
      x: -10,
      delay: 0.2,
    });
    gsap.from(this.image.nativeElement, {
      duration: 0.5,
      opacity: 0,
      x: -15,
      delay: 0.4,
    });
    gsap.from(this.info.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      x: -15,
      stagger: 0.2,
      delay: 0.5,
    });
    gsap.from(this.call.nativeElement, {
      duration: 0.5,
      opacity: 0,
      x: -15,
      delay: 0.7,
    });
  }

  ngAfterViewInit() {
    if (this.router.isActive(this.router.url, true)) {
      this.ui.openState.next('open');
    }
  }
  toggle(){
    this.router.navigate(['/form']);
  }
  tog(){
    this.router.navigate(['/contract']);
  }

  goBack() {
    this.router.navigateByUrl('listings');
    this.ui.openState.next('closed');
  }
}
