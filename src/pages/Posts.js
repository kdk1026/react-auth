import { useNavigate } from "react-router-dom";
import { useAxios } from "../utils/http";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Posts() {
    const navigate = useNavigate();

    const {instance} = useAxios();

    const [posts, setPosts] = useState([]);

    const isLoading = useSelector((state) => state.loading.isLoading);

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
    // eslint-disable-next-line
    }, [navigate]);

    return (
        <ul>
            {
                isLoading ? <span>로딩 중</span> :
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