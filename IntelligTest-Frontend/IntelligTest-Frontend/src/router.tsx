import {BrowserRouter, Routes, Route} from "react-router";
import AppLayout from "./layouts/AppLayout.tsx";
import DeskView from "./DeskView.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<DeskView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

