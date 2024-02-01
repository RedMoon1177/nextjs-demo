const fetchPost = async(postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const res = await fetch(url);
    const post = await res.json();

    return post;
}



const PostPage = async ({ params }) => {

    const post = await fetchPost(params.postId)
    return (
        <>
            <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
                <p className="font-bold">Post {post.id}: {post.title}</p>
                <p>{post.body}</p>
                <p className="border-t border-black mt-5 text-right italic">By user {post.userId}</p>
            </div>
        </>
    )
}

export default PostPage