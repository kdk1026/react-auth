import axios from "axios";
import { useDispatch } from "react-redux";
import { loadingAction } from "../store/actions/LoadingAction";
import { jwtDecode } from "jwt-decode";

export const useAxios = () => {
    const dispatch = useDispatch();

    const baseURL = `${process.env.REACT_APP_API_URL}`;

    const instance = axios.create({
        baseURL: baseURL
    });
    
    instance.interceptors.request.use(
        (config) => {
            loadingAction.setIsLoading(dispatch, true);

            const accessToken = sessionStorage.getItem('accessToken');
    
            if ( accessToken ) {
                console.log( isTokenExpired(accessToken) );
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
    
            return config;
        },
        (error) => {
            loadingAction.setIsLoading(dispatch, false);

            console.log(error);
            return Promise.reject(error);
        }
    );
    
    instance.interceptors.response.use(
        (response) => {
            loadingAction.setIsLoading(dispatch, false);

            if ( response.status === 404 ) {
                console.log('404 페이지로 넘어가야 함!');
            }
    
            return response;
        },
        async (error) => {
            loadingAction.setIsLoading(dispatch, false);

            // console.log(error);
            if ( error.response?.status === 401 ) {
                // https://leeseong010.tistory.com/133
            }
            return Promise.reject(error);
        }
    );

    return {instance};
};

const isTokenExpired = (accessToken) => {
    if ( !accessToken ) {
        return true;
    }

    try {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000;

        console.log(currentTime);
        console.log(decodedToken);
        
        return decodedToken.exp < currentTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};