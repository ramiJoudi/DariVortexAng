import { Component, OnInit } from '@angular/core';
import { single } from '../estimate/data' ;
@Component({
  selector: 'rl-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Price';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    Object.assign(this, { single });
  }
  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
