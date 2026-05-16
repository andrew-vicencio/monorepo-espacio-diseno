"use client";

import React from "react";
import Link from "next/link";
import type { Post } from "@/data/types";
import { formatDate } from "@/utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const InsightsView = ({ insights }: { insights: Post[] }) => {
  return (
    <>
      <div className="relative h-[50vh] overflow-hidden bg-dark-grey">
        <img
          src="/images/CTA.jpg"
          alt="Espacio Diseño interior design insights"
          className="absolute -bottom-[40%] w-full opacity-80"
        />
      </div>
      <main className="mx-auto mt-16 mb-24">
        <ul
          className={clsx(
            "px-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:px-14",
            "md:grid-cols-3 md:px-20 lg:px-32 lg:gap-12",
            "xl:px-36 2xl:px-0 2xl:w-3/4 2xl:mx-auto"
          )}
        >
          {insights.map((insight, i) => (
            <li key={i} className="group hover:bg-slate-100 hover:text-dark-grey">
              <Link
                href={`/insights/${insight?.slug?.current ?? ""}`}
                className="h-full flex flex-col p-2 cursor-pointer"
              >
                <article className="h-full flex flex-col">
                  {insight?.image ? (
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="mx-auto w-full"
                    />
                  ) : null}
                  <div className="mt-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="max-h-14 overflow-hidden font-montserrat text-lg mb-2 lg:mb-1">
                        {insight.title}
                      </h2>

                      {insight._updatedAt && (
                        <h3 className="font-montserrat text-sm font-light mb-6">
                          {formatDate(insight._updatedAt)}
                        </h3>
                      )}
                    </div>
                    <div>
                      <p className="line-clamp-4 leading-6 mb-4 tracking-wide">
                        {insight.excerpt}
                      </p>
                      <span className="block text-right text-sm font-light tracking-widest uppercase group-hover:text-light-grey">
                        Read More
                        <FontAwesomeIcon
                          className="text-dark-grey group-hover:text-light-grey ml-4 scale-y-80 scale-x-150"
                          icon={faArrowRight}
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default InsightsView;
