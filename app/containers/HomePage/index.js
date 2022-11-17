/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { loadChildren } from '../App/action';
import messages from './messages';
import { compose } from 'redux';


import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from "./reducer"
import saga from './saga'
import { createStructuredSelector } from 'reselect';
import { makeSelectChildren, makeSelectLoading } from '../App/selectors';
import ChildrenList from 'components/ChildrenList/';
import { makeSelectIdChild } from './selectors';
import { changeIdChild } from './actions';

const key = 'home'

export function HomePage({
  idChild,
  children,
  loading,
  handleClick,
  onChangeId,
}) {
  const childrenProps = {
    children, 
    loading
  }
  console.log(childrenProps)
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className="container">
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <input 
        name='id'
        type='text'
        placeholder='Id...'
        value={idChild}
        onChange={onChangeId}
      />
      <button onClick={handleClick} className="btn btn-primary">
        Find
      </button>
      <ChildrenList {...childrenProps}/>
    </div>
  );
}

HomePage.prototype = {
  idChild: PropTypes.string,
  chidren: PropTypes.object,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  onChangeId: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  idChild: makeSelectIdChild(),
  children: makeSelectChildren(),
  loading: makeSelectLoading(),
})

export function mapDispatchToProps(dispatch) {
  return {
    onChangeId: evt => dispatch(changeIdChild(evt.target.value)),
    handleClick: evt => {
      if(evt.preventDefault) evt.preventDefault();
      dispatch(loadChildren())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);