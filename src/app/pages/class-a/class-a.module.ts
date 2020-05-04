import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassAPageRoutingModule } from './class-a-routing.module';

import { ClassAPage } from './class-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassAPageRoutingModule
  ],
  declarations: [ClassAPage]
})
export class ClassAPageModule {}
