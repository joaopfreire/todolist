import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface TodoState {
}

export const todoReducers: ActionReducerMap<TodoState> = {
};

export const getTodoState = createFeatureSelector<TodoState>(
  'todo'
);

