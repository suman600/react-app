// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import rootReducer from './reducers/userReducer';
import rootSaga from './sagas/rootSaga';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store with saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the saga middleware
sagaMiddleware.run(rootSaga);

// Function to render the app
const renderApp = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
};

// Initial rendering
if (module.hot) {
    module.hot.accept('./App', () => {
        setTimeout(renderApp);
    });
}

renderApp();
