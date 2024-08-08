import type { OverrideProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';

import { typographyVariants } from '.';

type TypographyOwnProps = VariantProps<typeof typographyVariants>;

export interface TypographyTypeMap<
  P = {},
  D extends React.ElementType = 'span',
> {
  props: P & TypographyOwnProps;
  defaultComponent: D;
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap['defaultComponent'],
  P = {
    as?: React.ElementType;
  },
> = OverrideProps<TypographyTypeMap<P, D>, D>;
