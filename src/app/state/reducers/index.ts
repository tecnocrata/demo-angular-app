import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromCharater from './characters.reducer';

export interface RootState {
  characters: fromCharater.CharactersState;
}

export const reducers: ActionReducerMap<RootState> = {
  characters: fromCharater.reducer,
};

export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => reducer(state, action);
};

export const storeDevTools = [
  StoreDevtoolsModule.instrument({ name: 'Demo Store' }),
];

export const metaReducers: MetaReducer<RootState>[] = [debug, storeFreeze];
