import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Attend2Page } from './attend2.page';

const routes: Routes = [
  {
    path: '',
    component: Attend2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Attend2PageRoutingModule {}
