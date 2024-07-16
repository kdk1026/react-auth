import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPosts } from "../apis/posts";

function Posts() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            await fetchPosts()
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