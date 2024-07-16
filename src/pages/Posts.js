import { useNavigate } from "react-router-dom";
import { useAxios } from "../utils/http";
import { useEffect, useState } from "react";
import { fetchPosts } from "../apis/posts";

function Posts() {
    const navigate = useNavigate();

    const {instance} = useAxios();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            await fetchPosts(instance)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                if ( err.response.status === 401 ) {
                    navigate('/login');
                }
            });
        };
        getPosts();
    // eslint-disable-next-line
    }, [navigate]);

    return (
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    )
}

export default Posts;