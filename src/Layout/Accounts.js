import { connect } from "react-redux";
import { useEffect } from "react";
import { actionFetchData } from "../Actions";

const UserItem = ({ user = {} }) => {
    return (
        <>
            <div>
                {Object.entries(user).map(([keyUser, value]) => (
                    <div key={keyUser}>{`${keyUser}: ${value}`}</div>
                ))}
            </div>
        </>
    );
};

const Accounts = ({ fetchData = null, usersArr = [] }) => {
    useEffect(fetchData, []);

    return (
        <>
            <div>Accounts</div>
            {usersArr.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
};

const CAccounts = connect((s) => ({ usersArr: s.usersData }), { fetchData: actionFetchData })(Accounts);

export default CAccounts;
