import { all } from 'redux-saga/effects';
import { watchFetchUsers } from '../routes/users/states/userSaga';

export default function* rootSaga() {
    yield all([
        watchFetchUsers(),
        // Add other root-sagas here if needed
    ]);
}
