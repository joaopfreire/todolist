import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { todoReducers } from './store/reducers/feature.reducer';
import { EntryContainer } from './containers/entry/entry.container';


@NgModule({
  declarations: [
    EntryContainer
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', todoReducers),
    SharedModule
  ]
})
export class TodoModule { }
