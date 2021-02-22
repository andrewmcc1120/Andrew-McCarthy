import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import * as Component from './index';


@NgModule({
  declarations: [
    Component.BlogContainerComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
