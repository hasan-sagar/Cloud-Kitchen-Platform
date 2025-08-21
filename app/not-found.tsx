import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          {/* 404 headline */}
          <h1 className="mb-4 text-7xl font-extrabold text-primary">404</h1>

          {/* Main message */}
          <p className="mb-4 text-3xl t font-bold text-gray-800 md:text-4xl">
            Something's missing.
          </p>

          {/* Secondary message */}
          <p className="mb-6 text-lg font-medium text-black">
            Sorry, we can't find that page. You'll find lots to explore on the
            homepage.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="text-white bg-primary font-medium rounded-lg text-sm px-6 py-3"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
