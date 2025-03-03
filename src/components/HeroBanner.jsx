import { Link } from "react-router-dom";

import HeroImage from "../assets/HeroImage.svg";

export default function HeroBanner() {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-16 lg:w-1/2">
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold lg:text-6xl">
            Welcome to Blog App
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            {
              "Here, you’ll find a wide range of articles covering various topics, including web development, software engineering, and programming languages. Whether you're a beginner looking to learn the basics or an experienced developer seeking advanced insights, there's something for everyone."
            }
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-indigo-400 font-bold hover:underline"
          >
            View all posts
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full"
          src={HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
}
