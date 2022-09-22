import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeroComponentComponent } from './primero-component.component';

const routes: Routes = [
  {
    path: '',
    children: [
       { path: 'agregar', component: PrimeroComponentComponent },
      { path: '**', redirectTo: 'agregar' },
    ]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinRoutingModule { }
