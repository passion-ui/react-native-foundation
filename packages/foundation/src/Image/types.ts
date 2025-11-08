import type {
  ImageProps as ImageAdapterProps,
  ImageSource as ImageAdapterSource,
} from '../Adapters';

export type ImageProps = ImageAdapterProps & {
  loading?: boolean;
};

export type ImageSource = ImageAdapterSource;
