"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const path = pathname.split("/").filter((uri) => !!uri);

  return (
    <div className="container md:text-sm font-light tracking-widest uppercase text-light-grey">
      <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        {path.map((uri, i) => (
          <li key={i}>
            &nbsp;&#47;&nbsp;
            <Link href={`/${uri}`}>{uri}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
