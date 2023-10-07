'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

import {
  HomeFilledIcon,
  HomeIcon,
  PlusIcon,
  PlusFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  LoginIcon,
} from '@/components/ui/icons';

import Avatar from './Avatar';

type Routes = '/' | '/login' | '/new' | '/posts' | '/search' | '/bookmark';

type Menu = Array<{
  href: Routes;
  icon: ReactNode;
  clickedIcon: ReactNode;
}>;

export const menu: Menu = [
  {
    href: '/',
    icon: <HomeIcon />,
    clickedIcon: <HomeFilledIcon />,
  },
  {
    href: '/new',
    icon: <PlusIcon />,
    clickedIcon: <PlusFilledIcon />,
  },
  {
    href: '/bookmark',
    icon: <BookmarkIcon />,
    clickedIcon: <BookmarkFilledIcon />,
  },
];

const MenuBar = () => {
  const pathName = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <nav className="max-w-[480px] w-full bg-blue-100 mx-auto h-full flex items-center">
      <ul className="flex w-full justify-between px-4">
        {menu.map((it) => (
          <Link className="text-2xl h-full" key={it.href} href={it.href}>
            {pathName === it.href ? it.clickedIcon : it.icon}
          </Link>
        ))}

        <li>
          {session ? (
            user && (
              <Link href={`/user/${user.username}`} className="flex items-center">
                <Avatar image={user.image} />
              </Link>
            )
          ) : (
            <button onClick={() => signIn()} className="text-2xl">
              <LoginIcon />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;