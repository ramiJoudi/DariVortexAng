import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rl-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor() { }
  title = 'mycharts';
  customColors = [
    {
      name: "Mobiles",
      value: '#0000ff'
    },
    {
      name: "sofa",
      value: '#0000ff'
    },
    {
      name: "car",
      value: '#0000ff'
    },
    {
      name: "Laptop",
      value: '#0000ff'
    }, {
      name: "AC",
      value: '#0000ff'
    },
    {
      name: "Headset",
      value: '#0000ff'
    },
    {
      name: "Fridge",
      value: '#0000ff'
    },
    {
      name: "telephone",
      value: '#0000ff'
    },
    {
      name: "chair",
      value: '#0000ff'
    },
    {
      name: "bike",
      value: '#0000ff'
    },
    {
      name: "aeroplane",
      value: '#0000ff'
    }
  ];
  // saleData;
  x = Math.floor((Math.random() * 100000) + 1);
  saleData = [
    { name: "Mobiles", value: 9000 }, { name: "sofa", value: 2300 }, { name: "car", value: 2600 },
    { name: "Laptop", value: 550 },
    { name: "AC", value: 1500 },
    { name: "Headset", value: 1900 },
    { name: "Fridge", value: 1000 },

    { name: "telephone", value: 2400 },
    { name: "chair", value: 2500 },

    { name: "bike", value: 700 },
    { name: "aeroplane", value: 2800 }

  ];
  reload() {
    window.location.reload()
  }
 
  ngOnInit(): void {
  }

}
