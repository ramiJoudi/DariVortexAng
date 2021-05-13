import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  message: string;
  retrieveResonse: any;
  base64Data: any;
  retrievedImage: string;
  selectedFile: File;

  constructor(private httpClient : HttpClient) { }
  
  
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

  // onUpload(selectedFile:any) {
  //   console.log(selectedFile);
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', selectedFile, selectedFile.name);
  

  //   this.httpClient.post('http://localhost:81/image/upload', uploadImageData, { observe: 'response' })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Image uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //     }
  //     );


  // }

  // getImage() {
  //   this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
  //     .subscribe(
  //       res => {
  //         this.retrieveResonse = res;
  //         this.base64Data = this.retrieveResonse.picByte;
  //         this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       }
  //     );
  // }
}
