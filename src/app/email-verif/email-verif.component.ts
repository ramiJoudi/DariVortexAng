import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rl-email-verif',
  templateUrl: './email-verif.component.html',
  styleUrls: ['./email-verif.component.scss']
})
export class EmailVerifComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  Eemail:string;
  ngOnInit(): void {
    this.Eemail = this.route.snapshot.paramMap.get('email');
  }

}

