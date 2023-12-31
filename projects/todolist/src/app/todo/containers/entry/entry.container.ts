import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoState } from '../../store/reducers/feature.reducer';
import { Action, Store } from '@ngrx/store';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.container.html',
  styleUrls: ['./entry.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryContainer implements OnInit {

  constructor(private store: Store<TodoState>) { }

  ngOnInit(): void {
  }
  
  dispatch(action: Action): void {
      this.store.dispatch(action);
  }

}
