/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import ChildrenList from 'components/ChildrenList/';
import { loadChildren } from '../App/action';
import messages from './messages';
import { useParams } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';
import { makeSelectChildren, makeSelectLoading } from '../App/selectors';
import { makeSelectIdChild, makeSelectUserId } from './selectors';
import { changeUserId } from './actions';

const key = 'home';

export function HomePage({
  children,
  loading,
  handleClick,
  changeUserId,
  match
}) {
  const { userId } = useParams();
  
  const childrenProps = {
    children,
    loading,
  };

  // console.log(match.params.userId)
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    changeUserId(userId)
    handleClick();
  }, [])

  return (
    <div className="container">
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      
      <ChildrenList {...childrenProps} />
    </div>
  );
}

HomePage.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  children: makeSelectChildren(),
  loading: makeSelectLoading(),
});

export function mapDispatchToProps(dispatch) {
  return {
    changeUserId: (userId) => dispatch(changeUserId(userId)),
    handleClick: evt => {
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
