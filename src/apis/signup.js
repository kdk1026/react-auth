export const signup = (instance, param) => {
    return instance.post('/register', param);
};