import { Routes, Route } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Other } from "../page/other/Other";


export const Router = () => {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/other" element={<Other/>} />
        </Routes>
    );
};