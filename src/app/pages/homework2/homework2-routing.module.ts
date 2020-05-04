import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homework2Page } from './homework2.page';

const routes: Routes = [
  {
    path: '',
    component: Homework2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Homework2PageRoutingModule {}
