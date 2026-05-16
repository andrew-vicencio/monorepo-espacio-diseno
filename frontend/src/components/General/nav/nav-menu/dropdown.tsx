import * as React from "react";
import Link from "next/link";
import { Menu } from '@/types/Menu.d';

const Dropdown = ({ submenus, dropdown }: { submenus: Menu[]; dropdown: boolean; }) => {
  return (
    <ul className={
      `absolute
        left-1/2
        -translate-x-1/2
        bg-slate-50
        border-2
        ${dropdown ? 'flex' : 'hidden'}
        flex-col
        gap-4
        drop-shadow-lg
        z-20
        px-6
        py-8
        min-w-fit
        text-light-grey`
    }>
      {
        submenus.map(({ name, url }, i) => {
          return (
            <li key={i} className="hover:text-dark-grey">
              <Link href={url}>{name}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Dropdown;
