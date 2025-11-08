import { createContext } from 'react';
import type { GridContextProps, Context } from './types';
import { defaultContext } from '../Consts';

const ApplicationContext = createContext<Context>(defaultContext);

const GridContext = createContext<GridContextProps>({
  numberOfColumns: 12,
  gutter: 12,
  sizePerSpan: 0,
  getSizeSpan: (span) => span,
});

export { GridContext, ApplicationContext };
