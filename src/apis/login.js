export const login = (instance, param) => {
    return instance.post('/login', param);
}