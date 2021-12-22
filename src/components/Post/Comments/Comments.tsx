// @flow strict
import React from 'react';
import { useSiteMetadata } from '../../../hooks';
import FacebookComment from './FacebookComment';

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
    const newUrl = 'https://tuanducdesign.com'; // TODO: migrate comment to new URL
    comments.push(
        <FacebookComment
          key="fb"
          facebookComment={facebookComment}
          fbCommentUrl={newUrl + fbCommentUrl}
          url={oldUrl + postSlug}
        />
    );
  }

  return comments;
};

export default Comments;
