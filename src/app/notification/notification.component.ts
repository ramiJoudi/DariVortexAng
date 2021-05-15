import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rl-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = "BF1V3WgoDEGr5BQ3-K0akEYHQjwS8QadgFKQsbb1U1uXQxdSod9GvTjlFX1RsEaUyoH9AQ_7wRXk05m6damv7-Y";

  constructor( //private swPush: SwPush, private newsletterService: NewsletterService
    ) { }

  ngOnInit(): void {
  }

  subscribeToNotifications() {

    //this.swPush.requestSubscription({
     //   serverPublicKey: this.VAPID_PUBLIC_KEY
    //})
    //.then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
    //.catch(err => console.error("Could not subscribe to notifications", err));
}
}
