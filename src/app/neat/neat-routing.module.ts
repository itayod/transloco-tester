import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NeatComponent} from './neat/neat.component';

const routes: Routes = [{path: '', component: NeatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeatRoutingModule { }
