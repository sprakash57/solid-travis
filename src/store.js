import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
    reducer,
    {},
    composedEnhancer(applyMiddleware(thunk))
);

export default store;