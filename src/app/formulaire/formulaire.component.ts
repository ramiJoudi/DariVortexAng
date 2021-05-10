import { Component, OnInit } from '@angular/core';
import {AppComponent} from 'src/app/app.component';
import {} from 'src/app/components/detail/detail.component';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {} from 'src/app/helpers/propertiesList';
import {SearchBuyRentService} from '../search-buy-rent.service';
import {HttpClient} from '@angular/common/http';
import {Deposit} from '../deposit';
@Component({
  selector: 'rl-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {
  openState: AppComponent;
  deposit: Deposit;


  public payPalConfig ?: IPayPalConfig;

  constructor(private  paiment: SearchBuyRentService, private httpClient: HttpClient, private service: SearchBuyRentService) {
    this.deposit = new Deposit();
  }
  selectedFile: File;
  message: string;
  imageName: any;
  m: any;

  public registerNow(){
    const resp = this.service.doRegistration(this.deposit);
    resp.subscribe((data) => this.m = data);


  }

  public onFileChanged(event) {

    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);


    const uploadImageData = new FormData();
    uploadImageData.append('imageFile1', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('imageFile2', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('imageFile3', this.selectedFile, this.selectedFile.name);

    this.httpClient.post('http://localhost:8090/deposit/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';

            // tslint:disable-next-line
            return this.httpClient.post('http://localhost:8090/deposit/addeposit', this.deposit, {responseType: 'text' as 'json'}).subscribe(resp =>
              {
              alert('success');
            });

          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );


  }
  public doRegistration(deposit){
    return this.httpClient.post('http://localhost:8090/deposit/addeposit', deposit, {responseType: 'text' as 'json'});
  }

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
            value: '678.1',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '678.1'
              }
            }
          },
          items: [{
            name: 'VorteX',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '678.1',
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
