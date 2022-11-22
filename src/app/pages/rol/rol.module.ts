import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ListComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
  ],
})
export class RolModule { }
