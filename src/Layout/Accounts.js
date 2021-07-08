import { connect } from "react-redux";
import { useEffect } from "react";
import { actionFetchData } from "../Actions";

const Accounts = ({ fetchData = null }) => {
    useEffect(fetchData, []);

    return <div>Accounts</div>;
};

const CAccounts = connect(null, { fetchData: actionFetchData })(Accounts);

export default CAccounts;
