import { Component, OnInit } from '@angular/core';
import {AppComponent} from 'src/app/app.component';
import {} from 'src/app/components/detail/detail.component';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {} from 'src/app/helpers/propertiesList';
@Component({
  selector: 'rl-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  openState: AppComponent;

  public payPalConfig ?: IPayPalConfig;

  constructor() { }

  ngOnInit(): void {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AXIpVUdDyHUtXVbyDOGXss7afPagbGpL74FiElORbv1mnnUA9YebdXTrsb8_enfWc4zULCuxsNYqPiOy',
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [{
            name: 'VorteX',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '9.99',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        size : 'small',
        color : 'blue',
        shape : 'rect'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then(details => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);


      },
      onError: err => {
        console.log('OnError', err);

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      },
    };
  }


}
