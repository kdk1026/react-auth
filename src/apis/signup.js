import instance from "../utils/http";

export const signup = (param) => {
    return instance.post('/register', param);
};