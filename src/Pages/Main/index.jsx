import { Outlet } from "react-router-dom";
import { Fijo } from "../../Components/Fijo";

const Main = props => {
    return (
        <div className="w-full flex flex-wrap">
            <Fijo />
            <Outlet />
        </div>
    )
}

export { Main };