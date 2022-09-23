import { Action, createReducer, on } from '@ngrx/store';
import { charactersRequested } from '../actions/characters.actions';

export interface Character {
  name: string;
  gender: string;
}

export interface CharactersState {
  characters: Character[];
}

export const initialState: CharactersState = {
  characters: [{ name: 'Rick', gender: 'Male' }],
};

const characterReducer = createReducer(
  initialState,
  on(charactersRequested, (state) => ({ ...initialState }))
);

export const reducer = (
  state: CharactersState | undefined,
  action: Action
): CharactersState => characterReducer(state, action);
