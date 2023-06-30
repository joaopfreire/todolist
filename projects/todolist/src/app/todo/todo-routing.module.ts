import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryContainer } from './containers/entry/entry.container';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entry'},
  {path: 'entry', component: EntryContainer},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
