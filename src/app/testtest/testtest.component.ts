import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../adminService/admin.service';

@Component({
  selector: 'rl-testtest',
  templateUrl: './testtest.component.html',
  styleUrls: ['./testtest.component.scss']
})
export class TesttestComponent implements OnInit {
  // fileToUpload: File;
  // imageUrl: string;
  // name:string;
  // selectedFile: any;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    
  }  
selectedFile: File;
imgURL: any;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;

public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
}

private imgSURL='http://localhost:81/image/upload';
onUpload() {
  console.log(this.selectedFile);
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
 

  this.httpClient.post(`${this.imgSURL}/${localStorage.getItem('username')}`, uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
       
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
    this.httpClient.get('http://localhost:81/image/get/' + localStorage.getItem('username'))
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        localStorage.setItem('photo',this.retrievedImage);
      }
    );
   

}

getImage() {
  this.httpClient.get('http://localhost:81/image/get/' + localStorage.getItem('username'))
    .subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        localStorage.setItem('photo',this.retrievedImage);
      }
    );
}

deleteImg(){
  this.httpClient.delete('http://localhost:81/image/delete/' + localStorage.getItem('username'))
  .subscribe(
    res => {
 
      localStorage.removeItem('photo')
    }
  );
}

//   handleFileInput(file: FileList) {
//     this.fileToUpload = file.item(0);

//     //Show image preview
//     let reader = new FileReader();
//     reader.onload = (event: any) => {
//       this.imageUrl = event.target.result;
      
//     }
//     reader.readAsDataURL(this.fileToUpload);
    
//   }
// put(){
//   this.AS.updatePh(this.name,this.imageUrl).subscribe(data=>console.log());
// }
// public onFileChanged(event) {
//   //Select File
//   this.selectedFile = event.target.files[0];
// }

}
