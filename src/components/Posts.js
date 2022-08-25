import React from "react";
import Movie from "../components/Movie";

const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map((post) => (
          <div>
            <Movie
              key={post.id}
              id={post.link}
              title={post.title}
              poster={post.image}
              actors={post.actor}
              year={post.pubDate}
              userRating={post.userRating}
            />
          </div>

        ))}
      </ul>
    </>
  );
};
export default Posts;