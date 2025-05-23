import {Outlet} from "react-router";

export default  function AppLayout() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <Outlet/>
        </div>
    );
}
