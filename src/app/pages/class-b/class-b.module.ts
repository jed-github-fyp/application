import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassBPageRoutingModule } from './class-b-routing.module';

import { ClassBPage } from './class-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassBPageRoutingModule
  ],
  declarations: [ClassBPage]
})
export class ClassBPageModule {}
