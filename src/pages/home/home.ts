import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutPage = AboutPage;
  
  camera;

  constructor(public navCtrl: NavController) {

    var device = new Device();
    if (device.platform === 'iOS') {
      this.camera = new Camera()
    }
  }


  takePicture(){

    var device = new Device();
    if (device.platform === 'iOS') {
      return
    }

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      var image = document.getElementById('myImage') as HTMLImageElement;
      image.src = base64Image;

    }, (err) => {
      // Handle error
    });
  }
}

