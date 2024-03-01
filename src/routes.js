import React, {useEffect, useState} from "react";
import {Link, Routes, Route, useLocation} from "react-router-dom";
import Dashboard from "./routes/dashboard/Dashboard";
import Users from "./routes/users/Users";
import Game from "./routes/game/Game";
import NotFound from "./routes/not-found/NotFound";
import ColorPicker from "./routes/color-picker/ColorPicker";


function AppRoutes({activeRouter}) {
    const location = useLocation()
    const [activeRoute, setActiveRoute] = useState(null)
    let pathName = location.pathname;
    if (pathName === '/') {
        pathName = '/dashboard';
    } else {
        pathName = location.pathname;
    }

    useEffect(()=>{
        setActiveRoute(pathName);
        activeRouter(activeRoute)
    })
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/color" element={<ColorPicker />} />
            <Route path="/users" element={<Users />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
