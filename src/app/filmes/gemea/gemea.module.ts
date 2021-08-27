import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GemeaPageRoutingModule } from './gemea-routing.module';

import { GemeaPage } from './gemea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GemeaPageRoutingModule
  ],
  declarations: [GemeaPage]
})
export class GemeaPageModule {}
