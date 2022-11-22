import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    DeleteComponent,
    UpdateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule
  ]
})
export class PermissionModule { }
