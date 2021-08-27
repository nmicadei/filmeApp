import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AranhaPageRoutingModule } from './aranha-routing.module';

import { AranhaPage } from './aranha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AranhaPageRoutingModule
  ],
  declarations: [AranhaPage]
})
export class AranhaPageModule {}
