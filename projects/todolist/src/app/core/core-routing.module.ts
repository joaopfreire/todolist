import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainer} from './containers/home/home.container';
import {LayoutContainer} from './containers/layout/layout.container';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'layout'},
  {
    path: 'layout', component: LayoutContainer, children: [
      {path: '', pathMatch: 'full', redirectTo: 'home'},
      {path: 'home', component: HomeContainer},
      {path: 'todo', loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
