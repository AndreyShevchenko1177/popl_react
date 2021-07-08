import { BackToMainPageBtn } from "../Components";
import history from "../history";

const PageNotFound = () => {
    setTimeout(() => {
        history.push("/accounts");
    }, 5000);
    return (
        <div>
            <p>
                <b>404</b>
            </p>
            <p>
                <div>Page not found</div>
            </p>
            <p>The browser will automatically redirect you to the home page in 5 seconds.</p>
            <BackToMainPageBtn />
        </div>
    );
};

export default PageNotFound;
