import { Link } from "react-router-dom";
import { Logo } from "../Components";
import { connect } from "react-redux";
import accountsImg from "../imimages/sidebar/accounts.svg";
import overviewImg from "../imimages/sidebar/overview.svg";
import { actionFetchData } from "../Actions";
import { useEffect } from "react";





const MenuItem = ({ usersArr, item }) => {

    return <>
        <Link to={`/${item.menuName.toLowerCase()}`}>
            <div className="menuItem">
                <div>
                    <img src={item.menuImg} alt="popl logo" />
                </div>

                {item.menuName}
                <div className={'sidebarCount'}>
                    {(item.menuName === "Overview") ? '404' : usersArr.length}
                </div>
            </div>
        </Link>
    </>
}

const CMenuItem = connect((s, { item }) => ({ usersArr: s.usersData, item: item }), {})(MenuItem);

const Sidebar = ({ fetchData }) => {
    let sidebarMenu = [
        { menuName: "Overview", menuImg: overviewImg },
        { menuName: "Accounts", menuImg: accountsImg },
    ];

    useEffect(() => {
        if (typeof fetchData === 'function') {
            fetchData();
        }
    }, []);

    return (
        <div className="sideBar">
            <Link to={"/"}>
                <Logo />
            </Link>
            {sidebarMenu.map((item) => <CMenuItem key={item.menuName} item={item} />)}

        </div>
    );
};

const CSidebar = connect((s) => ({ usersArr: s.usersData }), { fetchData: actionFetchData })(Sidebar);


export default CSidebar;
