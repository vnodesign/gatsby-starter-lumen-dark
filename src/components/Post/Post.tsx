// @flow strict
import React from "react";
import { Link } from "gatsby";
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
  const { tagSlugs } = post.fields;
  const { tags, title, date, authorName } = post.frontmatter;
  return (
    <article className={styles.post} itemScope itemType="http://schema.org/Article">
      <Link className={styles.post__homeButton} to="/" onClick={() => gtagTrack("HomeLink", "click", "home")} title="Back to home">← Back</Link>
      <div>
        <Content authorName={authorName} date={date} body={html} title={title} />
      </div>
      <div className={styles.post__footer}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
      </div>
    </article>
  );
};

export default Post;
