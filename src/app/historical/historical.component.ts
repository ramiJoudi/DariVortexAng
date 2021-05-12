import { Component, OnInit } from '@angular/core';
import {SearchBuyRentService} from '../search-buy-rent.service';
import {Deposit} from '../deposit';
@Component({
  selector: 'rl-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.scss']
})
export class HistoricalComponent implements OnInit {
  dg: any;

  constructor(private service: SearchBuyRentService) { }

  ngOnInit(){
    const resp = this.service.getDeposit();
    resp.subscribe((data) => this.dg = data);

  }

  deletebyid(id){
    this.service.deletebyid(id).subscribe(res => this.ngOnInit());
    window.location.reload();
  }



}
