import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, useLocation} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './routes/users/states/userReducer';
import rootSaga from './root-sagas/rootSaga';
import Header from "./shared/header/Header";
import Sidebar from "./shared/sidebar/Sidebar";
import  './index.css'
import AppRoutes from "./routes";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


function App() {
    const [showSidebar, setShowSidebar] = useState(true);
    const [activeRoute, setActiveRoute] = useState(null);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const getActiveRoute = (data) =>{
        if (data!==null){
            let removeSlash = data.replace('/', '');
            let capitalizedString = removeSlash.replace(removeSlash[0], removeSlash[0].toUpperCase());
            setActiveRoute(capitalizedString);
        }
    }
    return(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Header toggleSidebar={toggleSidebar} titleText={activeRoute} />
                    <section>
                        <Sidebar showSidebar={showSidebar} />
                        <main>
                            <AppRoutes activeRouter={getActiveRoute} />
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
