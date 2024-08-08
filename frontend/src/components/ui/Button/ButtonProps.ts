import type { OverrideProps } from '@/types';
import type { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '.';

type ButtonOwnProps = VariantProps<typeof buttonVariants>;

export interface ButtonTypeMap<P = {}, D extends React.ElementType = 'button'> {
  props: P & ButtonOwnProps;
  defaultComponent: D;
}

export type ButtonProps<
  D extends React.ElementType = ButtonTypeMap['defaultComponent'],
  P = {
    as?: React.ElementType;
  },
> = OverrideProps<ButtonTypeMap<P, D>, D>;
