import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TRANSLOCO_SCOPE, TRANSLOCO_LOADING_TEMPLATE, TranslocoModule} from '@ngneat/transloco';

import { NeatRoutingModule } from './neat-routing.module';
import { NeatComponent } from './neat/neat.component';

@NgModule({
  declarations: [NeatComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    NeatRoutingModule
  ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'neat' },
    {
      provide: TRANSLOCO_LOADING_TEMPLATE,
      useValue: `<span id="default-loading-template">Loading template...</span>`
    }
  ]
})
export class NeatModule { }
