import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center group justify-center rounded-full text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-20',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-foreground active:bg-primary active:text-primary-foreground disabled:bg-muted-foreground disabled:border-muted-foreground outline-primary',
        secondary:
          'bg-white text-primary hover:bg-foreground hover:text-white active:bg-transparent active:text-primary disabled:border-muted-foreground disabled:text-muted-foreground',
        blur: 'rounded-full bg-primary-foreground/45 backdrop-blur-xl',
        pill: 'rounded-full bg-pill disabled:border',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-10 px-5 py-3',
        lg: 'h-11 px-9',
        xl: 'h-12 px-11 py-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'xl',
    },
  }
);
