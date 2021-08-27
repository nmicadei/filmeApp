import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassaroPageRoutingModule } from './passaro-routing.module';

import { PassaroPage } from './passaro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassaroPageRoutingModule
  ],
  declarations: [PassaroPage]
})
export class PassaroPageModule {}
