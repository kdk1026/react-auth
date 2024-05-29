import { useNavigate } from "react-router-dom";
import instance from "../utils/http";
import { useEffect, useState } from "react";

function Posts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            await instance.get('/posts')
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