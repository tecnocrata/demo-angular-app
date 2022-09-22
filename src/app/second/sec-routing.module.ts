import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegundoComponentComponent } from './segundo-component.component';

const routes: Routes = [
  {
    path: '',
    children: [
       { path: '', component: SegundoComponentComponent },
      { path: '**', redirectTo: 'agregar' },
    ]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecRoutingModule { }
