import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainScene from "../pages/MainScene";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainScene />}></Route>
            </Routes>
        </BrowserRouter>
    )
}