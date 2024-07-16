export const fetchPosts = (instance) => {
    return instance.get('/posts');
};