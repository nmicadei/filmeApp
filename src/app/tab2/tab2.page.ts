import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController,public toastController: ToastController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'nao vai compartilhar',
      subHeader: 'ja falei que nao vai',
      message: 'irmao vai toma caju.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'nao tem suco tem suco vai comprar.',
      duration: 5000
    });
    toast.present();
  }
}
