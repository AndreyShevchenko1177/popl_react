import { Link } from "react-router-dom";

const Sidebar = () => (
    <>
        <div>Sidebar</div>
        <Link to={"/overview"}>
            <div>overview</div>
        </Link>
        <Link to={"/accounts"}>
            <div>Accounts</div>
        </Link>
    </>
);

export default Sidebar;
