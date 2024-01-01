import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="min-h-[100vh] grid place-items-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-4xl">
                <img
                    src="../img/icons/logo.svg" alt ="Logotipo"
                    className="max-w-xs"
                />

                <div className="p-10 w-full">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}