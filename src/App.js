import "./App.css";
import { Provider } from "react-redux";
import {
    // BrowserRouter as Router, // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
    Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import history from "./history";
import { store } from "./Reducers";
import { Accounts, Overview, Sidebar, PageNotFound } from "./Layout";
// import overview from "./Layout/Overview";
// import Sidebar from "./Layout/Sidebar";
// import PageNotFound from "./Layout/PageNotFound";

function App() {
    return (
        <>
            <Provider store={store}>
                <Router history={history}>
                    <div className="wrapper">
                        <div className="sideBar">
                            <Sidebar />
                        </div>
                        <div className="content">
                            <Switch>
                                <Route path="/accounts" component={Accounts} exact />
                                <Route path="/overview" component={Overview} exact />
                                <Redirect from="/" to="/accounts" exact />
                                <Route component={PageNotFound} exact />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        </>
    );
}

export default App;
