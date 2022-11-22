import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule
  ]
})
export class PartiesModule { }
