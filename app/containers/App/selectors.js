import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState

const selectRouter = state => state.router;

const makeSelectChildren = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.children,
  )

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectChildren, makeSelectLoading, makeSelectLocation };
