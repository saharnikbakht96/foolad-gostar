import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/search.reducer';
import middlewares from './middlewares';

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(
            ...middlewares
        )
    );


    store.subscribe(() => { });

    return store;
}