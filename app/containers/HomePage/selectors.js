/**
 * Homepage selectors
 */

 import { createSelector } from 'reselect';
 import { initialState } from './reducer';
 
 const selectHome = state => state.home || initialState;
 
 const makeSelectIdChild = () =>
   createSelector(
     selectHome,
     homeState => homeState.idChild,
   );
 
 export { selectHome, makeSelectIdChild };
 