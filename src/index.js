import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './routes/users/states/userReducer';
import rootSaga from './root-sagas/rootSaga';
import Header from "./shared/sidebar/Sidebar";
import Sidebar from "./shared/header/Header";
import  './index.css'
import AppRoutes from "./routes";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const renderApp = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Provider store={store}>
                <Sidebar></Sidebar>
                <section>
                    <Header></Header>
                    <main>
                        <AppRoutes></AppRoutes>
                    </main>
                </section>
            </Provider>
        </React.StrictMode>
    );
};

renderApp();
