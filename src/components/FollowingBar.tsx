'use client';

import { PacmanLoader } from 'react-spinners';
import Link from 'next/link';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';
import useMe from '@/hooks/me';

function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;

  return (
    <section className="w-full flex justify-center items-center min-h-[90px] mb-4 overflow-x-auto relative z-0">
      {loading ? (
        <PacmanLoader color="#121063" />
      ) : (
        !users ||
        (users.length === 0 && (
          <p className="font-semibold">{`You don't have following`}</p>
        ))
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ username, image }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Avatar image={image} size="large" highlight />
              <p className="w-full text-center font-semibold text-sm overflow-hidden text-ellipsis">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}

export default FollowingBar;
