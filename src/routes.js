import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Dashboard from "./routes/dashboard/Dashboard";
import Users from "./routes/users/Users";
import Game from "./routes/game/Game";
import NotFound from "./routes/not-found/NotFound";
import ColorPicker from "./routes/color-picker/ColorPicker";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/game" element={<Game />} />
            <Route path="/color" element={<ColorPicker />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
