import { cva } from 'class-variance-authority';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      heading: 'text-heading',
      title: 'text-text',
      body: 'text-paragraph',
      inherit: '',
    },
    size: {
      lg: '',
      md: '',
      sm: '',
    },
    font: {
      lg: '!font-semibold',
      md: 'font-medium',
      sm: 'font-normal',
    },
  },
  compoundVariants: [
    {
      variant: 'heading',
      size: 'lg',
      className: 'text-[42px] lg:text-[68px] lg:leading-[74px] font-medium',
    },
    {
      variant: 'heading',
      size: 'md',
      className: 'text-4xl lg:text-[64px] lg:leading-[78.02px] font-medium',
    },
    {
      variant: 'heading',
      size: 'sm',
      className: 'text-[32px] leading-[58.5px] lg:text-5xl font-medium',
    },
    {
      variant: 'title',
      size: 'lg',
      className: 'text-2xl lg:text-3xl font-medium',
    },
    {
      variant: 'title',
      size: 'md',
      className: 'text-xl lg:text-[26px] lg:leading-[28px] font-medium',
    },
    {
      variant: 'title',
      size: 'sm',
      className: 'text-lg lg:text-2xl',
    },
    {
      variant: 'body',
      size: 'lg',
      className: 'text-sm lg:text-xl',
    },
    {
      variant: 'body',
      size: 'md',
      className: 'text-sm lg:text-lg',
    },
    {
      variant: 'body',
      size: 'sm',
      className: 'text-xs lg:text-base',
    },
  ],
  defaultVariants: {
    variant: 'body',
    size: 'lg',
    font: 'sm',
  },
});

export const variantMapping1 = {
  heading: 'h1',
  title: 'h6',
  body: 'p',
  inherit: 'span',
};

export const variantMapping = {
  heading: {
    lg: 'h1',
    md: 'h2',
    sm: 'h3',
  },
  title: {
    lg: 'h4',
    md: 'h5',
    sm: 'h6',
  },
  body: {
    lg: 'p',
    md: 'p',
    sm: 'p',
  },
  inherit: {
    lg: 'span',
    md: 'span',
    sm: 'span',
  },
};
