import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './routes/users/states/userReducer';
import rootSaga from './root-sagas/rootSaga';
import Header from "./shared/header/Header";
import Sidebar from "./shared/sidebar/Sidebar";
import  './index.css'
import AppRoutes from "./routes";
import {BrowserRouter} from "react-router-dom";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


function App() {
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Header toggleSidebar={toggleSidebar} />
                    <section>
                        <Sidebar showSidebar={showSidebar} />
                        <main>
                            <AppRoutes />
                        </main>
                    </section>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}
function renderApp() {
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}

renderApp();
