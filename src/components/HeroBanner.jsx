import { Link } from "react-router-dom";

import HeroImage from "../assets/HeroImage.svg";

export default function HeroBanner() {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-16 lg:w-1/2">
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Here you'll find a variety of articles on topics such as web
            development, software engineering, and programming languages.
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
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
