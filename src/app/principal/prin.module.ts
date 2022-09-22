import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrinRoutingModule } from './prin-routing.module';
import { PrimeroComponentComponent } from './primero-component.component';


@NgModule({
  declarations: [
    PrimeroComponentComponent
  ],
  imports: [
    CommonModule,
    PrinRoutingModule
  ]
})
export class PrinModule { }
