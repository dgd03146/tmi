'use client';

import Avatar from './Avatar';
import Image from 'next/image';
import { parseDate } from '@/utils/date';
import { SimplePost } from '@/model/post';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetail from './PostDetail';
import PostUserAvatar from './PostUserAvatar';

type Props = {
  post: SimplePost;
  priority?: boolean;
};

function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, image, createdAt, likes, text } = post;
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="border-b">
      <div className="flex justify-between items-center py-2">
        <PostUserAvatar image={userImage} username={username} />
        <p className=" text-neutral">•{parseDate(createdAt)}</p>
      </div>
      <p className="font-bold py-4 font-libre">{text}</p>
      <div className="w-full h-[250px]">
        <Image
          className="w-full h-full object-cover aspect-square rounded-[24px] border-neutral shadow-neutral shadow-md"
          src={image}
          alt={`photo by ${username}`}
          width={500}
          height={500}
          priority={priority}
          onClick={() => setOpenModal(true)}
        />
      </div>
      <ActionBar post={post} />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}

export default PostListCard;
