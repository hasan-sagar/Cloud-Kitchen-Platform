import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          {/* 404 headline */}
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            404
          </h1>

          {/* Main message */}
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-800 md:text-4xl">
            Something's missing.
          </p>

          {/* Secondary message */}
          <p className="mb-6 text-lg font-light text-mutedColor">
            Sorry, we can't find that page. You'll find lots to explore on the
            homepage.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center text-white bg-primary hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-200"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
