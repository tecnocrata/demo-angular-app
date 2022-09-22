import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../app/principal/prin/prin.module').then(m => m.PrinModule)
  },
  {
    path: 'other',
    loadChildren: () => import('../app/second/sec/sec.module').then(m => m.SecModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
