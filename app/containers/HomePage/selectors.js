/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUserId = () =>
  createSelector(
    selectHome,
    homeState => homeState.userId,
  );

export { selectHome, makeSelectUserId };
