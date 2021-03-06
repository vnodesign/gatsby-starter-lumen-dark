// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import { gtagTrack } from '../../utils';

import * as styles from '../../assets/scss/components/Pagination/Pagination.module.scss';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {
  const prevClassName = cx({
    'pagination__prevLink': true,
    'pagination__prevLinkDisable': !hasPrevPage
  });

  const nextClassName = cx({
    'pagination__nextLink': true,
    'pagination__nextLinkDisable': !hasNextPage
  });

  return (
    <nav className={styles.pagination} role="navigation" aria-label="Posts">
      <div className={styles.pagination__prev}>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName} onClick={() => gtagTrack('Pagination', 'click', 'PRE_PAGE', { page: prevPagePath })} title={PAGINATION.PREV_PAGE}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className={styles.pagination__next}>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName} onClick={() => gtagTrack('Pagination', 'click', 'NEXT_PAGE', { page: nextPagePath })} title={PAGINATION.NEXT_PAGE}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </nav>
  );
};

export default Pagination;
