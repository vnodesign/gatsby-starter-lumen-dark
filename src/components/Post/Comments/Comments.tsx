// @flow strict
import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import loadable from '@loadable/component';
const FacebookComment = loadable(() => import('./FacebookComment'));

type Props = {
  postTitle: string,
  postSlug: string,
  fbCommentUrl?: string
};

const Comments = ({ postSlug, fbCommentUrl = '' }: Props) => {
  const comments = [];
  const {
    facebookComment
  } = useSiteMetadata();

  if (facebookComment && facebookComment.active) {
    const oldUrl = 'http://tuanducdesign.com'; // TODO: migrate comment to new URL
    comments.push(
        <FacebookComment
          key="fb"
          facebookComment={facebookComment}
          fbCommentUrl={fbCommentUrl}
          url={oldUrl + postSlug}
        />
    );
  }

  return comments;
};

export default Comments;
