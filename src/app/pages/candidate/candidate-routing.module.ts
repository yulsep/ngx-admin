import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListComponent,
  },
  {
    path: 'crear',
    component: CreateComponent,
  },
  {
    path: 'actualizar',
    component: UpdateComponent,
  },
  {
    path: 'eliminar',
    component: DeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule { }
