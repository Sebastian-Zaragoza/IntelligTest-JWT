import {Outlet} from "react-router";
import Logo from "../components/Logo.tsx";

export default function AuthLayout() {
    return (
        <div className="relative min-h-screen flex">
            <div className="absolute py-10 pl-20 flex justify-between items-center columns-2">
                <Logo />
                <h1 className="text-center font-semibold text-white ">IntelligTest</h1>
            </div>

            <div className="hidden lg:flex w-1/2 bg-gray-800 text-white flex-col justify-center items-start pt-20 pl-24 space-y-4">
                <h1 className="text-5xl font-bold">Transform Your Notes into</h1>
                <h2 className="text-7xl font-bold">
                    Powerful AI Generated Exams
                </h2>
                <footer className="mt-auto text-sm opacity-75 py-6">
                    © 2025 IntelligTest. All rights reserved.
                </footer>
            </div>
            <Outlet />
        </div>
    );
}
