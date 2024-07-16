import instance from "../utils/http";

export const fetchPosts = () => {
    return instance.get('/posts');
};