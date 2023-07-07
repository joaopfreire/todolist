import {Action, createReducer} from '@ngrx/store';

export interface Acao {
    icone: string;
    nome: string;
    acao: any;
    // acao: Action;
}

export interface AcoesState {
    mapa: { [activity: string]: Acao[] };
}


export const initialState: AcoesState = {
    mapa: {
        '': [
            {icone: '', nome: '', acao: '' }
        ]
    }
};

const reducer = createReducer<AcoesState, Action>(
    initialState,
);

export function acoesReducer(state: AcoesState | undefined, action: Action): AcoesState {
    return reducer(state, action);
}
