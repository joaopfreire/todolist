import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { a } from '../actions/acoes.actions';

@Injectable()
export class AcoesEffects {

    a$ = createEffect(() => this.actions$.pipe(
        ofType(a),
        // exhaustMap(),
    ));

    constructor(private actions$: Actions, private matDialog: MatDialog, private store: Store) {
    }

}
