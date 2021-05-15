import { Component, OnInit } from '@angular/core';
import {ContractService} from '../contract.service';
import {Contract} from '../contract';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'rl-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  contract: Contract= new Contract();
  message: any;
  openState: AppComponent;

  constructor(private service: ContractService, private router: Router) { }

  ngOnInit(): void {
  }

  public registerNow(){

    let response = this.service.addContract(this.contract);
    response.subscribe((data: any) => this.message = data);
  }
}
