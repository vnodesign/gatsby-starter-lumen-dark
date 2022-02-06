// @flow strict
import React from "react";
import { Link } from "gatsby";

import Comments from "./Comments";
import Content from "./Content";
import Tags from "./Tags";

import * as styles from "../../assets/scss/components/Post/Post.module.scss";
import type { Node } from "../../types";
import { gtagTrack } from "../../utils";

type Props = {
  post: Node;
};

  const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, authorName, fbCommentUrl } = post.frontmatter;
  return (
    <article className={styles.post} itemScope itemType="http://schema.org/Article">
      <div className={styles.post__thumbnail}>
      <img src={post.frontmatter.thumbnail} decoding="async" loading="lazy" alt={title} width="600" height="400" />
      </div>
      <Link className={styles.post__homeButton} to="/" onClick={() => gtagTrack("HomeLink", "click", "home")} title="Back to home">Back</Link>
      <div className={styles.post__content}>
        <Content authorName={authorName} date={date} body={html} title={title} />
      </div>

      <div className={styles.post__footer}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>

      <div className={styles.post__comments}>
          <Comments postSlug={slug} postTitle={post.frontmatter.title} fbCommentUrl={fbCommentUrl} />
      </div>
    </article>
  );
};

export default Post;
