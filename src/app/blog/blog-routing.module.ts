import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as Component from './index';

const routes: Routes = [
  { path: '', component: Component.BlogContainerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
