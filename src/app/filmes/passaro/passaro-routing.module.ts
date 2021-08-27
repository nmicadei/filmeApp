import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassaroPage } from './passaro.page';

const routes: Routes = [
  {
    path: '',
    component: PassaroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassaroPageRoutingModule {}
