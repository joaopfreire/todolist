import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryContainer } from './containers/entry/entry.container';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entry'},
  {path: 'entry', component: EntryContainer},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
