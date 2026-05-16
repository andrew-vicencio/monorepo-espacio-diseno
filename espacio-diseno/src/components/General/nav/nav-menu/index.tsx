'use client';

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IMenu } from '@/types/IMenu.d';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import clsx from "clsx";


const NavMenu = ({ menu }: { menu: IMenu }) => {
  const { name, submenus, url } = menu;
  const router = useRouter();
  const pathname = usePathname();

  const isActive = url
    ? pathname === url
    : submenus?.some(sub => pathname.startsWith(sub.url));

  return (
    <Popover className="relative">
      {
        submenus ? (
          <>
            <PopoverButton
              className={clsx(
                'flex items-center gap-1 py-1 transition-colors duration-150',
                isActive ? 'text-espacio-red font-medium' : 'text-dark-grey hover:text-black'
              )}
              onDoubleClick={() => { if (url) router.push(url) }}
            >
              {name}
              {submenus && (
                <FontAwesomeIcon
                  className={clsx('text-xs transition-colors', isActive ? 'text-espacio-red' : 'text-light-grey')}
                  icon={faCaretDown}
                />
              )}
            </PopoverButton>
            <PopoverPanel
              anchor={{ to: "bottom", gap: "0.5em" }}
              className={clsx(
                "z-50 border border-slate-100 drop-shadow-xl bg-white py-6 px-5 rounded-md min-w-[160px]",
                "text-dark-grey capitalize font-montserrat font-light tracking-widest"
              )}
            >
              <ul className="flex flex-col gap-3">
                {submenus.map((sub, i) => (
                  <li key={i}>
                    <Link
                      className={clsx(
                        'block py-0.5 transition-colors duration-150',
                        pathname === sub.url
                          ? 'text-espacio-red font-medium'
                          : 'hover:text-espacio-red'
                      )}
                      href={sub.url}
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </PopoverPanel>
          </>
        ) : (
          url ? (
            <Link
              href={url}
              className={clsx(
                'py-1 transition-colors duration-150',
                isActive ? 'text-espacio-red font-medium' : 'text-dark-grey hover:text-black'
              )}
            >
              {name}
            </Link>
          ) : (
            <span className="text-dark-grey">{name}</span>
          )
        )
      }
    </Popover>
  )
}

export default NavMenu;
