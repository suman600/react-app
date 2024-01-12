import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from './userActions';

function* fetchUsers() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
        const data = yield response.json();
        yield put(fetchUsersSuccess(data));
    } catch (error) {
        yield put(fetchUsersFailure(error));
    }
}

export function* watchFetchUsers() {
    yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}
