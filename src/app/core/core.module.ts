import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import * as Component from './index';


@NgModule({
  declarations: [
    Component.LandingPageComponent,
    Component.NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    Component.LandingPageComponent,
    Component.NavbarComponent
  ]
})
export class CoreModule { }
