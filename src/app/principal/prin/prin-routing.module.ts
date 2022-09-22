import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      /* { path: 'agregar', component: AgregarComponent }, */
      { path: '**', redirectTo: 'listado' },
    ]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinRoutingModule { }
