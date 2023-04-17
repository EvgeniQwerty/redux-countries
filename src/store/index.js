import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import axios from 'axios';
import * as api from '../config';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
    )
);
