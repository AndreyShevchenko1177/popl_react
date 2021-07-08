import { urlGetConst, urlPatchConst } from "../const";

const initGetRequest = (url) => () => {
    return fetch(url, { method: "GET" }).then((res) => res.json());
};

export const getRequest = initGetRequest(urlGetConst);
