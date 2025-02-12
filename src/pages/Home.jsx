import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import PostCard from "../components/PostCard";
import { POST } from "../dummyData";

export default function Home() {
  const [posts, setPosts] = useState(POST);

  useEffect(() => {}, []);
  return (
    <div>
      <HeroBanner />

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
