import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ posts }) => {
  // Get the post id from the URL
  const { id } = useParams();
  // Find the post with the matching id
  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </div>
  );
}

export default Post;
