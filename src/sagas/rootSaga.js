// src/sagas/rootSaga.js

import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './userSaga';

export default function* rootSaga() {
    yield all([
        watchFetchUsers(),
        // Add other sagas here if needed
    ]);
}
