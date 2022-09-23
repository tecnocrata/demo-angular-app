import { createAction } from '@ngrx/store';

const enum CharactersActionTypes {
  CharactersRequested = 'Characters were requested',
  CharactersSucceed = 'Characters were retrieved successfully',
  CharactersFailed = "Characters weren't retrieved",
}

export const charactersRequested = createAction(
  CharactersActionTypes.CharactersRequested
);
export const charactersSucceed = createAction(
  CharactersActionTypes.CharactersSucceed
);
export const charactersFailed = createAction(
  CharactersActionTypes.CharactersFailed
);
