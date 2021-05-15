import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
import { NotificationService } from '../notification.service';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'rl-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  subscription: Subscription = new Subscription();
  message: any;
  openState: AppComponent;


  constructor(private service: SubscriptionService, private router: Router, private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  public registerNow(){

      let response = this.service.addSubscription(this.subscription);
      response.subscribe((data: any) => this.message = data
      
      /*{
      this.message = data
      this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
      }*/
      
      );Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
  }

}
