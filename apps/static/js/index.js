import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import indexStore from './stores/indexStore';
import ReactIndex from './components/ReactIndex';

global.reduxStore = indexStore;

const history = syncHistoryWithStore(hashHistory, indexStore);

ReactDOM.render(
    <Provider store={indexStore}>
        <Router history={history}>
            <Redirect from ="/" to="reactIndex/" />
            <Route path="reactIndex/" component={ReactIndex} />    
        </Router>,
    </Provider>,
    document.getElementById('root'),
);

