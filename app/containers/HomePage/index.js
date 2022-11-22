/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import ChildrenList from 'components/ChildrenList/';
import { useParams } from 'react-router-dom';
import { loadChildren } from '../App/action';

import reducer from './reducer';
import saga from './saga';
import { makeSelectChildren, makeSelectLoading } from '../App/selectors';
import { changeUserId } from './actions';

const key = 'home';

export function HomePage({ children, loading, handleClick, handleUserId }) {
  const { userId } = useParams();

  const childrenProps = {
    children,
    loading,
  };

  // console.log(match.params.userId)
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    handleUserId(userId);
    handleClick();
  }, []);

  return (
    <div className="container">
      <ChildrenList {...childrenProps} />
    </div>
  );
}

HomePage.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  handleUserId: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  children: makeSelectChildren(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    handleUserId: userId => dispatch(changeUserId(userId)),
    handleClick: () => {
      // if (evt.preventDefault) evt.preventDefault();
      dispatch(loadChildren());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
