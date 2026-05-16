import * as React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-12 py-24 lg:px-36 text-dark-grey">
      <h1 className="font-montserrat text-4xl mb-8 max-w-xs">Page not found</h1>
      <p className="mb-12 font-light tracking-wider leading-8">
        Sorry, we couldn&apos;t find what you were looking for.
        <br />
        <br />
        <Link href="/" className="text-espacio-red underline">
          Go home
        </Link>
        .
      </p>
    </main>
  );
}
