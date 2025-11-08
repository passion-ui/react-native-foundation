import type Navigator from '../Application/Navigator';
import type { ImageSource } from '../Image/types';

/**
 * Theme type.
 */
export type Theme = {
  dark: boolean;
  colors: {
    primary: {
      default: string;
      light: string;
      container: string;
    };
    secondary: {
      default: string;
      light: string;
      container: string;
    };
    background: {
      default: string;
      surface: string;
      disable: string;
    };
    text: {
      default: string;
      secondary: string;
      hint: string;
      disable: string;
    };
    border: {
      default: string;
      disable: string;
    };
    success: {
      default: string;
      light: string;
      container: string;
    };
    warning: {
      default: string;
      light: string;
      container: string;
    };
    error: {
      default: string;
      light: string;
      container: string;
    };
  };
  font: string;
  assets?: {
    headerBackground?: ImageSource;
  };
};

/**
 * Context type.
 */
export type Context = {
  theme: Theme;
  navigator?: Navigator;
  translate: (key: string) => string;
};

export type GridContextProps = {
  /**
   * Represents the number of columns in the grid.
   */
  numberOfColumns: number;

  /**
   * Represents the size of the gutter between grid items.
   */
  gutter: number;

  /**
   * Represents the size (width or height) per span number.
   */
  sizePerSpan: number;

  /**
   * A function that receives a span number and returns the calculated size for that span.
   */
  getSizeSpan: (span: number) => number;
};
