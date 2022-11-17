import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import ChildrenListItem from '../../containers/ChildrenListItem';

function ChildrenList({ loading, children }) {
    if (loading) {
        return <List item={children} component={LoadingIndicator} />;
    }
    console.log('from cl',children)
    return <List item={children} component={ChildrenListItem} />;
}

ChildrenList.propTypes = {
    loading: PropTypes.bool,
    children: PropTypes.any,
};

export default ChildrenList;
