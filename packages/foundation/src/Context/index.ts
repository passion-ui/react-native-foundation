import { createContext } from 'react';
import type { GridContextProps } from './types';

const GridContext = createContext<GridContextProps>({
  numberOfColumns: 12,
  gutter: 12,
  sizePerSpan: 0,
  getSizeSpan: (span) => span,
});

export { GridContext };
