import {BrowserRouter, Routes, Route} from "react-router";
import AppLayout from "./layouts/AppLayout.tsx";
import DeskView from "./DeskView.tsx";
import LoginUI from "./views/auth/LoginView.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import RegisterUI from "./views/auth/RegisterView.tsx";
import ConfirmAccountView from "./views/auth/ConfirmAccountView.tsx";
import RequestCodeView from "./views/auth/RequestCodeView.tsx";
import ForgetPasswordView from "./views/auth/ForgetPasswordView.tsx";
import NewPasswordView from "./views/auth/NewPasswordView.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<DeskView/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path={'/auth/login'} element={<LoginUI/>}/>
                    <Route path={'/auth/register'} element={<RegisterUI/>}/>
                    <Route path={'/auth/confirm-account'} element={<ConfirmAccountView/>}/>
                    <Route path={'/auth/request-code'} element={<RequestCodeView/>}/>
                    <Route path={'/auth/forget-password'} element={<ForgetPasswordView/>}/>
                    <Route path={'/auth/new-password'} element={<NewPasswordView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

