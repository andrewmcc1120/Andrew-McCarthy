import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import * as Component from './index';
import * as Service from './services/index';


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
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    Component.LandingPageComponent,
    Component.NavbarComponent
  ],
  providers: [
    Service.EmailService
  ]
})
export class CoreModule { }
