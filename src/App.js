import "./App.css";
import { Provider } from "react-redux";
import {
    // BrowserRouter as Router, // https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
    Router,
    Route,
    // Link,
    Switch,
    // NavLink,
    // Redirect,
} from "react-router-dom";
import history from "./history";
import { store } from "./Reducers";
import { Accounts } from "./Layout/Accounts";
import { Sidebar } from "./Layout/Sidebar";


const PageNotFound = () => {
    setTimeout(() => {
        history.push("/accounts");
    }, 5000);
    return (
        <div>
            <p><b>404</b></p>
            <p><b>Page not found</b></p>
        </div>
    );
};

function App() {
    return (
        <>
            {/* <Provider store={ store } > */}
            <Router history={history}>
                <Sidebar>
                    
                </Sidebar>
                <Switch>
                        <Route path="/accounts" component={Accounts} exact />
                        <Route path="/" component={Accounts} exact />
                        <Route component={PageNotFound} exact />
                    </Switch>

            </Router>
            
         {/* </Provider> */}
        </>
    )
}

export default App;
