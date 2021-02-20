import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import * as Component from './index';


@NgModule({
  declarations: [
    Component.ContactFormComponent,
    Component.LandingPageComponent,
    Component.NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Component.LandingPageComponent,
    Component.NavbarComponent
  ]
})
export class CoreModule { }
