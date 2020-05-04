import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Attend2PageRoutingModule } from './attend2-routing.module';

import { Attend2Page } from './attend2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Attend2PageRoutingModule
  ],
  declarations: [Attend2Page]
})
export class Attend2PageModule {}
