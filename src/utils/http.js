import axios from "axios";

const baseURL = `${process.env.REACT_APP_API_URL}`;

const instance = axios.create({
    baseURL: baseURL
});

instance.interceptors.request.use(
    (config) => {
        const accessToken = sessionStorage.getItem('accessToken');

        if ( accessToken ) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        if ( response.status === 404 ) {
            console.log('404 페이지로 넘어가야 함!');
        }

        return response;
    },
    async (error) => {
        // console.log(error);
        if ( error.response?.status === 401 ) {
            // https://leeseong010.tistory.com/133
        }
        return Promise.reject(error);
    }
);

export default instance;