import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreators} from './store/action';
import {checkAuth} from "./services/api-actions";
import {AuthorizationStatus} from "./const";
import {createAPI} from "./services/api";


const api = createAPI(
    () => store.dispatch(ActionCreators.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
