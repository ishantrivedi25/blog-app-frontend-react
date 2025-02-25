import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import PostCard from "../components/PostCard";
import { getPosts } from "../api/postService";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        if (response.status === "success") {
          setPosts(response.data?.posts || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div>
      <HeroBanner />

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-indigo-400 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
