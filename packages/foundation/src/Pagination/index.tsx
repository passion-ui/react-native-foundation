import { type FC } from 'react';
import type { PaginationProps } from './types';
import PaginationWhiteDot from './PaginationWhiteDot';
import PaginationDot from './PaginationDot';
import PaginationNumber from './PaginationNumber';
import PaginationScroll from './PaginationScroll';

const Pagination: FC<PaginationProps> = (props) => {
  const { type } = props;
  switch (type) {
    case 'black_white':
      return <PaginationWhiteDot {...props} />;
    case 'number':
      return <PaginationNumber {...props} />;
    default:
      return <PaginationDot {...props} />;
  }
};

export { Pagination, PaginationScroll };
