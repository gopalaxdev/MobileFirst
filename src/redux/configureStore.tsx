import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index'


export default function configureStore() {
    let composeEnhancers;
    if (
        process.env.NODE_ENV !== "production" &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
        composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    } else {
        composeEnhancers = compose;
    }
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export type RootState = ReturnType<typeof rootReducer>
