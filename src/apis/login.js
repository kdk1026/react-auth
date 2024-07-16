import instance from "../utils/http";

export const login = (param) => {
    return instance.post('/login', param);
}