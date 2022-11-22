import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
