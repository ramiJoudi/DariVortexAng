import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Contract } from '../contract';
import { ContractService } from '../contract.service';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfmake';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'rl-contract-pdf',
  templateUrl: './contract-pdf.component.html',
  styleUrls: ['./contract-pdf.component.scss']
})
export class ContractPdfComponent implements OnInit {
  

  public ListContract: Contract[];
  contract: Contract= new Contract();
  message: any;
  openState: AppComponent;
  
  constructor(private service: ContractService, private router: Router) { 
    //this.contract = JSON.parse(sessionStorage.getItem('contract')) || new Contract();
  }

  ngOnInit(): void {
    this.getContracts();
    this.getDocumentDefinition();
  }


  getContracts(){
    this.service.getContracts().subscribe((data: Contract[])=>
   {  console.log(data);
    
   this.ListContract=data;
 })
  }

  delete(id: number){
   
    this.service.deleteContract(id).subscribe(data => this.ListContract=data,
      ()=> this.getContracts()); 
  }

  update(): void {
    console.table(this.contract);
    this.service.addContract(this.contract)
      .subscribe(  response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          alert(this.message);
          this.router.navigate(['/contract']);
        },
        error => {
          console.log(error);
        });
  }

  generatePdf(action = 'open') {
    const documentDefinition = this.getDocumentDefinition();
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;
      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
    /*const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  pdfmake.createPdf(documentDefinition).open();
 }*/
  }

  getDocumentDefinition(){

     sessionStorage.setItem('contract', JSON.stringify(this.ListContract));

    return {
     content: [
        {
          text: 'CONTRACT',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
       
        {
         columns: [
            [{
              text: 'Id : ' + this.ListContract,
            },
            {
              text: 'Name : ' + this.ListContract,
            },
            {
              text: 'Type : ' + this.ListContract,
            },
            {
              text: 'Price :' + this.ListContract,
            },
            {
              text: 'Date : ' + this.ListContract,
            },
            ],
          ]
        }],
        styles: {
          name: {
            fontSize: 16,
            bold: true
          }
        }
    };
  }
}
