import axios from "axios";
import { loadingAction } from "../store/actions/LoadingAction";
import { getToken, isTokenExpired } from "./token";
import store from "../store";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

instance.interceptors.request.use(
    (config) => {
        loadingAction.setIsLoading(store.dispatch, true);

        const accessToken = getToken();

        if ( accessToken ) {
            console.log( isTokenExpired(accessToken) );
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        loadingAction.setIsLoading(store.dispatch, false);

        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        loadingAction.setIsLoading(store.dispatch, false);

        if ( response.status === 404 ) {
            console.log('404 페이지로 넘어가야 함!');
        }

        return response;
    },
    async (error) => {
        loadingAction.setIsLoading(store.dispatch, false);

        // console.log(error);
        if ( error.response?.status === 401 ) {
            // https://leeseong010.tistory.com/133
        }
        return Promise.reject(error);
    }
);

export default instance;