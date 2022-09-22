import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecRoutingModule } from './sec-routing.module';
import { SegundoComponentComponent } from './segundo-component.component';


@NgModule({
  declarations: [
    SegundoComponentComponent
  ],
  imports: [
    CommonModule,
    SecRoutingModule
  ]
})
export class SecModule { }
