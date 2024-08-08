import { OverridableComponent } from '@/types';
import React from 'react';

import { cn } from '@/lib/utils';

import { TypographyProps, TypographyTypeMap } from './TypographyProps';
import { typographyVariants, variantMapping } from './typographyVariants';

export const Typography = React.forwardRef(
  ({ className, variant, size, font, as, ...props }: TypographyProps, ref) => {
    const Component =
      as || variantMapping[variant ?? 'body'][size ?? 'lg'] || 'span';

    return (
      <Component
        className={cn(typographyVariants({ variant, size, font, className }))}
        ref={ref}
        {...props}
      />
    );
  }
) as OverridableComponent<TypographyTypeMap>;

Typography.displayName = 'Typography';
