import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Homework2PageRoutingModule } from './homework2-routing.module';

import { Homework2Page } from './homework2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Homework2PageRoutingModule
  ],
  declarations: [Homework2Page]
})
export class Homework2PageModule {}
