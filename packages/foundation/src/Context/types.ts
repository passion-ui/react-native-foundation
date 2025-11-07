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
