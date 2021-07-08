import history from "../history";

const BackToMainPageBtn = () => {
    return (
        <button
            onClick={() => {
                history.push("/");
            }}
        >
            {"Back to Main Page"}
        </button>
    );
};

export default BackToMainPageBtn;
