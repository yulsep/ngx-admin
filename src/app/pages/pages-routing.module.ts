import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    // Project routes
    {
      path: 'seguridad',
      loadChildren: () => import('./security/security.module')
      .then(m => m.SecurityModule),
    },
    {
      path: 'candidatos',
      loadChildren: () => import('./candidate/candidate.module')
      .then(m => m.CandidateModule),
    },
    {
      path: 'mesas',
      loadChildren: () => import('./table/table.module')
      .then(m => m.TableModule),
    },

    {
      path: 'votos',
      loadChildren: () => import('./vote/vote.module')
      .then(m => m.VoteModule),
    },
    {
      path: 'partidos',
      loadChildren: () => import('./parties/parties.module')
      .then(m => m.PartiesModule),
    },
    {
      path: 'reportes',
      loadChildren: () => import('./reports/reports.module')
      .then(m => m.ReportsModule),
    },
    {
      path: 'usuario',
      loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule),
    },
    {
      path: 'rol',
      loadChildren: () => import('./rol/rol.module')
      .then(m => m.RolModule),
    },
    {
      path: 'permisos',
      loadChildren: () => import('./permission/permission.module')
      .then(m => m.PermissionModule),
    },
    // Template routes
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
