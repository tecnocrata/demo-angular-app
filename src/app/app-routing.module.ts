import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'primero',
    loadChildren: () => import('./principal/prin.module').then(m => m.PrinModule)
  },
  {
    path: 'segundo',
    loadChildren: () => import('./second/sec.module').then(m => m.SecModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
