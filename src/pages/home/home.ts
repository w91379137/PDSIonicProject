import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
//import { plugin } from 'my-cordova-plugin'
//import { Keyboard } from 'ionic-plugin-keyboard';
//import { Storage } from '@ionic/storage';
//import { IonicNativePlugin } from '@ionic-native/core';
//import { Geolocation } from '@ionic-native/geolocation';

// import { Injectable } from '@angular/core';
// import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
// import { Observable } from 'rxjs/Observable';

// @Plugin({
//   pluginName: 'MyCordovaPlugin',
//   plugin: 'my-cordova-plugin', // npm package name, example: cordova-plugin-camera
//   pluginRef: 'mycordovaplugin', // the variable reference to call the plugin, example: navigator.geolocation
//   repo: '', // the github repository URL for the plugin
//   install: '', // OPTIONAL install command, in case the plugin requires variables
//   installVariables: [], // OPTIONAL the plugin requires variables
//   platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
// })
// @Injectable()
// export declare class MyCordovaPlugin extends IonicNativePlugin {

//   // @Cordova()
//   // functionName(arg1: string, arg2: number): Promise<any> {
//   //     return; // We add return; here to avoid any IDE / Compiler errors
//   // }
//   echo(arg1: string, arg2: string): void;
// }

declare let cordova: any;   //ionic2调用自定义插件这里这么写

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  aboutPage = AboutPage;
  
  camera;

  constructor(public navCtrl: NavController) {
  }

  takePicture(){
    
    if (window["cordova"] == undefined) {
      alert("no cordova");
      return
    }
    
    // var p = new MyCordovaPlugin();
    // p.echo("arg3", "arg4");
    cordova.plugins.MyCordovaPlugin.echo("arg3", "arg4", result => {
      alert(result);
    }, error => alert(error))

    var device = new Device();
    if (device.platform !== 'ios') {
      alert("no ios");
      return
    }

    if (this.camera == undefined) {
      this.camera = new Camera()
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
      console.log(err);
      alert(err);
    });
  }
}

