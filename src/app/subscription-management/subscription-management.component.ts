import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'rl-subscription-management',
  templateUrl: './subscription-management.component.html',
  styleUrls: ['./subscription-management.component.scss']
})
export class SubscriptionManagementComponent implements OnInit {

  public ListSubscription: Subscription[];
  subscription: Subscription= new Subscription();
  message: any;
  openState: AppComponent;

  constructor(private service: SubscriptionService, private router: Router) { }

  ngOnInit(): void {
    this.getSubscription();
  }

  getSubscription(){
    this.service.getSubscription().subscribe((data: Subscription[])=>
   {  console.log(data);
    
   this.ListSubscription=data;
 })
  }

  update(): void {
    console.table(this.subscription);
    this.service.addSubscription(this.subscription)
      .subscribe(  response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          alert(this.message);
          this.router.navigate(['/subscription']);
        },
        error => {
          console.log(error);
        });
  }
  delete(idSub: number){
   
    this.service.deleteSubscription(idSub).subscribe(data => this.ListSubscription=data,
      ()=> this.getSubscription()); 
  }

}
